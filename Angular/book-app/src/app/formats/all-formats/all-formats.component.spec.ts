import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormatsComponent } from './all-formats.component';

describe('AllFormatsComponent', () => {
  let component: AllFormatsComponent;
  let fixture: ComponentFixture<AllFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
