import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DecklistService } from '../decklist.service';
import { StatTrackerService } from '../stat-tracker.service';

@Component({
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.css']
})
export class StatTrackerComponent implements OnInit {
  decklist: Card[];
  averageCMC: number = 0;
  deckSize: number = 0;
  landCount: number = 0;
  nonLandCount: number = 0;
  landPercentage: number = 0;
  nonLandPercentage: number = 0;

  constructor(
    private decklistService: DecklistService,
	private statTrackerService: StatTrackerService,
  ) { }

  ngOnInit(): void {
	this.decklist = this.decklistService.getDecklist();
	this.statTrackerService.setDecklist(this.decklist);
	this.decklistService.decklistUpdated.subscribe(
	  () => {
		this.averageCMC = this.statTrackerService.getAverageCMC();
		this.deckSize = this.statTrackerService.getDeckSize();
		this.landCount = this.statTrackerService.getLandCount();
		this.nonLandCount = this.statTrackerService.getNonLandCount();
        this.landPercentage = this.statTrackerService.getLandPercentage();
		this.nonLandPercentage = this.statTrackerService.getNonLandPercentage();
      }
    );
  }

}
