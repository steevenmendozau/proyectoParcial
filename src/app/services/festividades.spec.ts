import { TestBed } from '@angular/core/testing';

import { Festividades } from './festividades';

describe('Festividades', () => {
  let service: Festividades;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Festividades);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
