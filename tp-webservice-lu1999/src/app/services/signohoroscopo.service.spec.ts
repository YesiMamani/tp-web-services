import { TestBed } from '@angular/core/testing';

import { SignohoroscopoService } from './signohoroscopo.service';

describe('SignohoroscopoService', () => {
  let service: SignohoroscopoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignohoroscopoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
