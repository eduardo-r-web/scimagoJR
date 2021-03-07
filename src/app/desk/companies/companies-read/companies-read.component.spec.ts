import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesReadComponent } from './companies-read.component';

describe('CompaniesReadComponent', () => {
  let component: CompaniesReadComponent;
  let fixture: ComponentFixture<CompaniesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
