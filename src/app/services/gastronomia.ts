import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../models/platos';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {
  private url = 'https://raw.githubusercontent.com/steevenmendozau/datos-turismo-ecuador-/refs/heads/main/gastronomia.json';

  constructor(private http: HttpClient) {}

  obtenerPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(this.url);
  }
}
