import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictViewComponent } from './predict-view.component';

describe('PredictViewComponent', () => {
  let component: PredictViewComponent;
  let fixture: ComponentFixture<PredictViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
