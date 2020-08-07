import { TestBed } from '@angular/core/testing';

import { OneFormatService } from './one-format.service';

describe('OneFormatService', () => {
  let service: OneFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
