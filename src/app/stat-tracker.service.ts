import { Injectable } from '@angular/core';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class StatTrackerService {
  decklist: Card[] = [];

  constructor() { }
  
  setDecklist(decklist: Card[]) {
    this.decklist = decklist;
  }
  
  getAverageCMC() {
	if(this.decklist.length == 0) {
	  return 0;
	}
	let sum: number = 0;
	let card;
	for(card in this.decklist) {
	  sum += card.cmc;
	}
	return sum / this.getNonLandCount();
  }
  
  getLandCount() {
	return this.decklist.filter(card => card.main_type == "Land").length;
  }
  
  getNonLandCount() {
	return (this.decklist.length - this.decklist.filter(card => card.main_type == "Land").length);
  }
  
  getLandPercentage() {
	if(this.decklist.length == 0) {
	  return 0;
	}
	return (this.getLandCount() / this.decklist.length);
  }
  
  getNonLandPercentage() {
	if(this.decklist.length == 0) {
	  return 0;
	}
    return (this.getNonLandCount() / this.decklist.length);
  }
}
