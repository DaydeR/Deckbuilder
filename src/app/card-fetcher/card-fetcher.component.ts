import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardFetcherService } from '../card-fetcher.service';
import { DecklistService } from '../decklist.service';

@Component({
  selector: 'app-card-fetcher',
  templateUrl: './card-fetcher.component.html',
  styleUrls: ['./card-fetcher.component.css']
})
export class CardFetcherComponent implements OnInit {
  cardName: string;
  count: number;
  fetchedCard: Card;
  cardNameList: string;

  constructor(
	private cardFetcherService: CardFetcherService,
	private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
  }
  
  addCard(): void {
    this.cardFetcherService.getCard(this.cardName)
	  .subscribe(card => {
		if(card) {
			console.log(card)
	      this.fetchedCard = card;
		  this.decklistService.addCard(this.fetchedCard, this.count);
	      this.fetchedCard = null;
		}
	    this.cardName = null;
	    this.count = null;
	  });
  }
  
  addCardList(): void {
	this.cardFetcherService.getCardList(this.cardNameList)
	  .subscribe(cardList => {
		for(let card of cardList) {
		  if(card) {
		    console.log(card)
			//this.fetchedCard = card;
			this.decklistService.addCard(card, 1);
			//this.fetchedCard = null;
		  }
		}
	  });
  }
}
