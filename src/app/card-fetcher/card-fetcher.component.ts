import { Component, OnInit } from '@angular/core';

import { CardFetcherService } from '../card-fetcher.service';

@Component({
  selector: 'app-card-fetcher',
  templateUrl: './card-fetcher.component.html',
  styleUrls: ['./card-fetcher.component.css']
})
export class CardFetcherComponent implements OnInit {
  card = 'none';

  constructor(
	private cardFetcherService: CardFetcherService
  ) { }

  ngOnInit(): void {
  }
  
  getCard(): void {
    this.cardFetcherService.getCard()
	  .subscribe(card => this.card = card);
  }
}
