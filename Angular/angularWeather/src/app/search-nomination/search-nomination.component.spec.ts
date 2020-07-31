import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNominationComponent } from './search-nomination.component';

describe('SearchNominationComponent', () => {
  let component: SearchNominationComponent;
  let fixture: ComponentFixture<SearchNominationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNominationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
