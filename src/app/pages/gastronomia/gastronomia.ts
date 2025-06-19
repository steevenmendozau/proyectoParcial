import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastronomiaService } from '../../services/gastronomia';
import { Plato } from '../../models/platos';

@Component({
  standalone: true,
  selector: 'app-gastronomia',
  imports: [CommonModule],
  templateUrl: './gastronomia.html',
  styleUrls: ['./gastronomia.css']
})
export class GastronomiaComponent {
  platos: Plato[] = [];

  constructor(private gastronomiaService: GastronomiaService) {}

  ngOnInit(): void {
    this.gastronomiaService.obtenerPlatos().subscribe(data => {
      this.platos = data;
    });
  }
}
