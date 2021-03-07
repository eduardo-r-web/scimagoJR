import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesHistoryComponent } from './companies-history.component';

describe('CompaniesHistoryComponent', () => {
  let component: CompaniesHistoryComponent;
  let fixture: ComponentFixture<CompaniesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
