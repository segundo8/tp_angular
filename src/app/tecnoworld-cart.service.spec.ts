import { TestBed } from '@angular/core/testing';

import { TecnoworldCartService } from './tecnoworld-cart.service';

describe('TecnoworldCartService', () => {
  let service: TecnoworldCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnoworldCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
