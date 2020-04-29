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

  constructor(
    private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
	this.decklistService.selectionUpdated.subscribe(
	  (selectedCard) => {
        this.selectedCard = this.decklistService.getSelected();
      }
    );
  }

}
