import { Component, OnInit } from '@angular/core';
import { FestividadesService } from '../../services/festividades';
import { Festividad } from '../../models/festividades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festividades',
  imports: [CommonModule],
  templateUrl: './festividades.html',
  styleUrl: './festividades.css'
})
export class Festividades implements OnInit {
  festividades: Festividad[] = [];

  constructor(private festividadesService: FestividadesService) { }

  ngOnInit(): void {
    this.festividadesService.getFestividades().subscribe(data => {
      this.festividades = data;
    });
  }
}
