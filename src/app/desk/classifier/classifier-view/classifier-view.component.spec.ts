import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierViewComponent } from './classifier-view.component';

describe('ClassifierViewComponent', () => {
  let component: ClassifierViewComponent;
  let fixture: ComponentFixture<ClassifierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifierViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
