import { Injectable, EventEmitter } from '@angular/core';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class DecklistService {
  decklist: Card[] = [];
  selectedCard: Card;
  selectionUpdated = new EventEmitter();

  constructor() { }
  
  getDecklist() {
	return this.decklist;
  }
  
  addCard(card: Card, count: number) {
	for (let i = 0; i < count; i++) {
      this.decklist.push(card);
	  console.log("added a card")
    }
	this.sortByType();
	this.setSelected(card);
  }
  
  sortByType() {
	this.decklist.sort((a, b) => (a.type_line > b.type_line) ? 1 : -1)
  }
  
  setSelected(card: Card) {
	this.selectedCard = card;
	this.selectionUpdated.emit(this.selectedCard);
  }
  
  getSelected() {
	return this.selectedCard;	
  }
}
