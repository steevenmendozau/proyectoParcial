import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Regiones } from './pages/regiones/regiones';
import { Gastronomia } from './pages/gastronomia/gastronomia';
import { Festividades } from './pages/festividades/festividades';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'inicio', component: Home },
    { path: 'regiones', component: Regiones },
    { path: 'gastronomia', component: Gastronomia },
    { path: 'festividades', component: Festividades }
];
