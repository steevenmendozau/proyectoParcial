import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomiaComponent } from './gastronomia';

describe('GastronomiaComponent', () => {
  let component: GastronomiaComponent;
  let fixture: ComponentFixture<GastronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastronomiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
