import { TestBed } from '@angular/core/testing';

import { InfoEnvioService } from './info-envio.service';

describe('InfoEnvioService', () => {
  let service: InfoEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
