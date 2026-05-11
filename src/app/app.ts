import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HouseGrid } from './houses/house-grid/house-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HouseGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homes-app-landing-page-angular');
}
