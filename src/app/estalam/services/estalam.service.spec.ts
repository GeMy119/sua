import { TestBed } from '@angular/core/testing';

import { EstalamService } from './estalam.service';

describe('EstalamService', () => {
  let service: EstalamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstalamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
