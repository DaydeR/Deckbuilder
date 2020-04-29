import { TestBed } from '@angular/core/testing';

import { StatTrackerService } from './stat-tracker.service';

describe('StatTrackerService', () => {
  let service: StatTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
