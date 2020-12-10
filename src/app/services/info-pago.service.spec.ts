import { TestBed } from '@angular/core/testing';

import { InfoPagoService } from './info-pago.service';

describe('InfoPagoService', () => {
  let service: InfoPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
