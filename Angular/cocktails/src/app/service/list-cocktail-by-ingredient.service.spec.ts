import { TestBed } from '@angular/core/testing';

import { ListCocktailByIngredientService } from './list-cocktail-by-ingredient.service';

describe('ListCocktailByIngredientService', () => {
  let service: ListCocktailByIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCocktailByIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
