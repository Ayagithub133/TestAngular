import { TestBed } from '@angular/core/testing';

import { QuateService } from './quate.service';

describe('QuateService', () => {
  let service: QuateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
