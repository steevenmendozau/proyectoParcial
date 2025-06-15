import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festividad } from '../models/festividades';

@Injectable({
  providedIn: 'root'
})
export class FestividadesService {

  private url = "https://raw.githubusercontent.com/steevenmendozau/datos-turismo-ecuador-/refs/heads/main/festividades.json";

  constructor(private http: HttpClient) {}

  getFestividades(): Observable<Festividad[]> {
    return this.http.get<Festividad[]>(this.url);
  }
}
