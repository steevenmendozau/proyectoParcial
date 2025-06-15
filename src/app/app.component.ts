import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Menu } from "./shared/menu/menu";
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Menu, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoParcial';
}
