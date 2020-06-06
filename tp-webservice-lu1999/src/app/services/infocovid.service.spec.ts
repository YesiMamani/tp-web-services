import { TestBed } from '@angular/core/testing';

import { InfocovidService } from './infocovid.service';

describe('InfocovidService', () => {
  let service: InfocovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfocovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
