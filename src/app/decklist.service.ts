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
	if(!count) {
	  console.log("empty count given, defaulting to 1")
	  count = 1;
	}
	if(!+count || count < 1) {
	  console.log("invalid count given, cancelling search")
	  return;
	}
	let existingCard = this.decklist.find(existingCard => existingCard.name == card.name);
	if(existingCard) {
		console.log("already in deck")
		for (let i = 0; i < count; i++) {
          existingCard.count.push(existingCard.count.length);
        }
		this.setSelected(existingCard);
	    this.decklistUpdated.emit();
	} else {
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
  }
  
  removeCard(card: Card, count: number) {
	let existingCard = this.decklist.find(existingCard => existingCard.name == card.name);
	if(existingCard) {
	  if(count >= existingCard.count.length) {
		this.decklist.splice(this.decklist.indexOf(card), 1);
		this.selectedCard = null;
	    this.selectionUpdated.emit(this.selectedCard);
	  } else {
		for (let i = 0; i < count; i++) {
          existingCard.count.pop();
        }
	  }
	}
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
	if(card.layout != "normal") {
	  if(card.card_faces[0].type_line.includes("Land")) {
		  card.main_type = "Land";
	  } else if(card.card_faces[0].type_line.includes("Creature")) {
	  	card.main_type = "Creature";
	  } else if(card.card_faces[0].type_line.includes("Planeswalker")) {
	  	card.main_type = "Planeswalker";
	  } else if(card.card_faces[0].type_line.includes("Instant")) {
	  	card.main_type = "Instant";
	  } else if(card.card_faces[0].type_line.includes("Sorcery")) {
	  	card.main_type = "Sorcery";
	  } else if(card.card_faces[0].type_line.includes("Artifact")) {
	  	card.main_type = "Artifact";
	  } else if(card.card_faces[0].type_line.includes("Enchantment")) {
	  	card.main_type = "Enchantment";
	  } else {
	  	card.main_type = "Unknown";
	  }
	} else {
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
	console.log(card.name)
	console.log(card.main_type)
  }
}
