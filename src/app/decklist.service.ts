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
  }
}
