import { TestBed } from '@angular/core/testing';

import { FindVisitService } from './find-visit.service';

describe('FindVisitService', () => {
  let service: FindVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
