import { Injectable } from '@angular/core';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class DecklistService {
  decklist: Card[] = [];

  constructor() { }
  
  getDecklist() {
	return this.decklist;
  }
  
  addCard(card: Card, count: number) {
	for (let i = 0; i < count; i++) {
      this.decklist.push(card);
    }
	this.sortByType();
  }
  
  sortByType() {
	this.decklist.sort((a, b) => (a.type_line > b.type_line) ? 1 : -1)
  }
}
