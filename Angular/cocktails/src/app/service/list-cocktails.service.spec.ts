import { TestBed } from '@angular/core/testing';

import { ListCocktailsService } from './list-cocktails.service';

describe('ListCocktailsService', () => {
  let service: ListCocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
