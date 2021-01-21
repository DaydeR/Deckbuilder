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
  
  getDeckSize() {
	let size = 0;
	for(let card of this.decklist) {
	  size += card.count.length;
	}
	return size;
  }
  
  getAverageCMC() {
	if(this.getNonLandCount() == 0) {
	  return 0;
	}
	let sum: number = 0;
	for(let card of this.decklist) {
	  sum += card.cmc * card.count.length;
	}
	return sum / this.getNonLandCount();
  }
  
  getLandCount() {
	let count = 0;
	for(let card of this.decklist) {
      if(card.main_type == "Land") {
	    count += card.count.length;
	  }
	}
	return count;
  }
  
  getNonLandCount() {
	let count = 0;
	for(let card of this.decklist) {
	  if(card.main_type != "Land") {
	    count += card.count.length;
	  }
	}
	return count;
  }
  
  getLandPercentage() {
	let landCount = this.getLandCount();
	if(landCount == 0) {
	  return 0;
	}
	return (landCount / this.getDeckSize());
  }
  
  getNonLandPercentage() {
	let nonLandCount = this.getNonLandCount();
	if(nonLandCount == 0) {
	  return 0;
	}
    return (nonLandCount / this.getDeckSize());
  }
}
