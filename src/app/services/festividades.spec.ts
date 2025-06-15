import { TestBed } from '@angular/core/testing';

import { FestividadesService } from './festividades';

describe('Festividades', () => {
  let service: FestividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
