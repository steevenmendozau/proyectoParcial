import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../models/region';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {
  private url = 'https://raw.githubusercontent.com/Thedyx21/data-regiones/refs/heads/main/regiones.json';

  constructor(private http: HttpClient) {}

  obtenerRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.url);
  }
}
