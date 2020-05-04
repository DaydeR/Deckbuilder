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
	if(this.getNonLandCount() == 0) {
	  return 0;
	}
	let sum: number = 0;
	for(let card of this.decklist) {
	  sum += card.cmc;
	  console.log(sum)
	}
	console.log(sum / this.getNonLandCount())
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
