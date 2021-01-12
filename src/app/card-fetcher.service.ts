import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap, debounceTime } from 'rxjs/operators';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardFetcherService {
	
  private scryfallUrl = 'https://api.scryfall.com';
  parameter: String;

  constructor(
	private http: HttpClient,
  ) { }
  
  getCard(searchTerm: string): Observable<Card> {
    return this.http.get<Card>(this.scryfallUrl+'/cards/named?fuzzy='+searchTerm.replace(' ', '+')).
	  pipe(
		debounceTime(100),
	    catchError(this.handleError<Card>('getCard', null)),
	  );
  }
  
  getCardList(searchTerms: string): Observable<Card[]> {
	let searchTermList = searchTerms.split("\n");
	let observableList:  Observable<Card>[] = [];
	for(let term of searchTermList) {
	  let splitTerm = term.split(" ");
	  for (let i = 0; i < splitTerm.length; i++) {
		  console.log(splitTerm[i]);
	  }
	  if(+splitTerm[0]) {
		let count = splitTerm[0];
		let cardName = splitTerm.slice(1).join(' ');
		console.log(cardName)
		for (let i = 0; i < count; i++) {
          observableList.push( 
			this.http.get<Card>(this.scryfallUrl+'/cards/named?fuzzy='+cardName.replace(' ', '+')).
			  pipe(
			    debounceTime(100),
			    catchError(this.handleError<Card>('getCard', null)),
	          )
			);
        }
	  } else {
		observableList.push( 
		  this.http.get<Card>(this.scryfallUrl+'/cards/named?fuzzy='+term.replace(' ', '+')).
	        pipe(
		      debounceTime(100),
	          catchError(this.handleError<Card>('getCard', null)),
	        )
		);
	  }
	}
	return forkJoin(observableList);
  }
  
  // From Angular 'Tour of Heroes' tutorial
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
