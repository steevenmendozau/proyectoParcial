import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Festividades } from './festividades';

describe('Festividades', () => {
  let component: Festividades;
  let fixture: ComponentFixture<Festividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Festividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Festividades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
