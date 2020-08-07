import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFormatComponent } from './one-format.component';

describe('OneFormatComponent', () => {
  let component: OneFormatComponent;
  let fixture: ComponentFixture<OneFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
