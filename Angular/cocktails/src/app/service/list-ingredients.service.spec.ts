import { TestBed } from '@angular/core/testing';

import { ListIngredientsService } from './list-ingredients.service';

describe('ListIngredientsService', () => {
  let service: ListIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
