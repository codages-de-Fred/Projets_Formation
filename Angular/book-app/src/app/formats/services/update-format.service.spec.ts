import { TestBed } from '@angular/core/testing';

import { UpdateFormatService } from './update-format.service';

describe('UpdateFormatService', () => {
  let service: UpdateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
