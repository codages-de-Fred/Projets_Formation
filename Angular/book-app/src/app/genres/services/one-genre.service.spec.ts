import { TestBed } from '@angular/core/testing';

import { OneGenreService } from './one-genre.service';

describe('OneGenreService', () => {
  let service: OneGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
