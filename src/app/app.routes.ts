import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RegionesComponent } from './pages/regiones/regiones';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia';
import { Festividades } from './pages/festividades/festividades';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'inicio', component: Home },
    { path: 'regiones', component: RegionesComponent },
    { path: 'gastronomia', component: GastronomiaComponent },
    { path: 'festividades', component: Festividades }
];
