import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
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
	this.parameter = searchTerm.replace(' ', '+');
    return this.http.get<Card>(this.scryfallUrl+'/cards/named?fuzzy='+this.parameter).
	  pipe(
		debounceTime(100),
	    catchError(this.handleError<Card>('getCard', null)),
	  );
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
