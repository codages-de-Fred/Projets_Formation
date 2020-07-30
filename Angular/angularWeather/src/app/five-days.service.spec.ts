import { TestBed } from '@angular/core/testing';

import { FiveDaysService } from './five-days.service';

describe('FiveDaysService', () => {
  let service: FiveDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
