import { TestBed } from '@angular/core/testing';

import { MetodosEnvioService } from './metodos-envio.service';

describe('MetodosEnvioService', () => {
  let service: MetodosEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
