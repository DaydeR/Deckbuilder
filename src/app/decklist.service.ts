import { Injectable, EventEmitter } from '@angular/core';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class DecklistService {
  decklist: Card[] = [];
  selectedCard: Card;
  selectionUpdated = new EventEmitter();
  decklistUpdated = new EventEmitter();

  constructor() { }
  
  getDecklist() {
	return this.decklist;
  }
  
  addCard(card: Card, count: number) {
	this.setMainType(card);
	card.count = [];
	for (let i = 0; i < count; i++) {
      card.count.push(i);
    }
    this.decklist.push(card);
	console.log("added a card")
	this.sortByType();
	this.setSelected(card);
	this.decklistUpdated.emit();
  }
  
  sortByType() {
	this.decklist.sort((a, b) => ((a.main_type == b.main_type) ? a.name > b.name : a.main_type > b.main_type) ? 1 : -1)
  }
  
  setSelected(card: Card) {
	this.selectedCard = card;
	this.selectionUpdated.emit(this.selectedCard);
  }
  
  getSelected() {
	return this.selectedCard;	
  }
  
  setMainType(card: Card) {
	if(card.type_line.includes("Land")) {
		card.main_type = "Land";
	} else if(card.type_line.includes("Creature")) {
		card.main_type = "Creature";
	} else if(card.type_line.includes("Planeswalker")) {
		card.main_type = "Planeswalker";
	} else if(card.type_line.includes("Instant")) {
		card.main_type = "Instant";
	} else if(card.type_line.includes("Sorcery")) {
		card.main_type = "Sorcery";
	} else if(card.type_line.includes("Artifact")) {
		card.main_type = "Artifact";
	} else if(card.type_line.includes("Enchantment")) {
		card.main_type = "Enchantment";
	} else {
		card.main_type = "Unknown";
	}
  }
}
