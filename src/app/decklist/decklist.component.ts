import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DecklistService } from '../decklist.service';

@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css']
})
export class DecklistComponent implements OnInit {
  decklist: Card[];

  constructor(
    private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
	this.decklist = this.decklistService.getDecklist();
	for (let i = 0; i < this.decklist.length; i++) {
      console.log(this.decklist[i].name);
    }
  }
  
  select(card: Card) {
	this.decklistService.setSelected(card);
  }

}
