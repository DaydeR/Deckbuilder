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

  constructor(
	private cardFetcherService: CardFetcherService,
	private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
  }
  
  addCard(): void {
    this.cardFetcherService.getCard(this.cardName)
	  .subscribe(card => {
	    this.fetchedCard = card;
		this.decklistService.addCard(this.fetchedCard, this.count);
	    this.fetchedCard = null;
	    this.cardName = null;
	    this.count = null;
	  });
  }
}
