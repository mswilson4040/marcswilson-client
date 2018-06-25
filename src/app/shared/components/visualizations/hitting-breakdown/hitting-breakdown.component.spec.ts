import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingBreakdownComponent } from './hitting-breakdown.component';

describe('HittingBreakdownComponent', () => {
  let component: HittingBreakdownComponent;
  let fixture: ComponentFixture<HittingBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HittingBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
