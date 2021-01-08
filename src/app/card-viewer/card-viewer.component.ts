import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DecklistService } from '../decklist.service';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css']
})
export class CardViewerComponent implements OnInit {
  selectedCard: Card;
  side: number = 0;

  constructor(
    private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
	this.decklistService.selectionUpdated.subscribe(
	  (selectedCard) => {
        this.selectedCard = this.decklistService.getSelected();
		this.side = 0;
      }
	);
  }
  
  flipCard(): void {
	if(this.side == 0) {
	  this.side = 1;
	} else {
	  this.side = 0;
	}
  }

  addCopy(): void {
	this.decklistService.addCard(this.selectedCard, 1);
  }
  
  removeCopy(): void {
	this.decklistService.removeCard(this.selectedCard, 1);
  }
}
