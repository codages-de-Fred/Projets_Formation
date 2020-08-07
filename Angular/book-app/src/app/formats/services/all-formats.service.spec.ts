import { TestBed } from '@angular/core/testing';

import { AllFormatsService } from './all-formats.service';

describe('AllFormatsService', () => {
  let service: AllFormatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFormatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
