import { TestBed } from '@angular/core/testing';

import { ScimagoService } from './scimago.service';

describe('ScimagoService', () => {
  let service: ScimagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScimagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
