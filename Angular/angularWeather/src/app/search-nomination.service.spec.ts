import { TestBed } from '@angular/core/testing';

import { SearchNominationService } from './search-nomination.service';

describe('SearchNominationService', () => {
  let service: SearchNominationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNominationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
