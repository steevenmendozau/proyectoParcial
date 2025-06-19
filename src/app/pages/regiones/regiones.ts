import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionesService } from '../../services/regiones';
import { Region } from '../../models/region';

@Component({
  standalone: true,
  selector: 'app-regiones',
  templateUrl: './regiones.html',
  styleUrls: ['./regiones.css'],
  imports: [CommonModule]
})
export class RegionesComponent implements OnInit {
  regiones: Region[] = [];

  constructor(private regionesService: RegionesService) {}

  ngOnInit(): void {
    this.regionesService.obtenerRegiones().subscribe(data => {
      this.regiones = data;
    });
  }
}
