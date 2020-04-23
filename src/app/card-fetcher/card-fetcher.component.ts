import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardFetcherService } from '../card-fetcher.service';

@Component({
  selector: 'app-card-fetcher',
  templateUrl: './card-fetcher.component.html',
  styleUrls: ['./card-fetcher.component.css']
})
export class CardFetcherComponent implements OnInit {
  cardName: string;
  card: Card;

  constructor(
	private cardFetcherService: CardFetcherService
  ) { }

  ngOnInit(): void {
  }
  
  getCard(): void {
    this.cardFetcherService.getCard(this.cardName)
	  .subscribe(card => this.card = card);
  }
}
