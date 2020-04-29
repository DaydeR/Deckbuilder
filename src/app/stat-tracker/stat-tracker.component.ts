import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { DecklistService } from '../decklist.service';

@Component({
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.css']
})
export class StatTrackerComponent implements OnInit {
  decklist: Card[];

  constructor(
    private decklistService: DecklistService,
  ) { }

  ngOnInit(): void {
	this.decklist = this.decklistService.getDecklist();
  }

}
