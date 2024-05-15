import { TestBed } from '@angular/core/testing';

import { MariagePermitService } from './mariage-permit.service';

describe('MariagePermitService', () => {
  let service: MariagePermitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariagePermitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
