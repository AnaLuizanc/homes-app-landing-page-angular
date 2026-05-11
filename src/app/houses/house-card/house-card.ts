import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { House } from '../house';

@Component({
  selector: 'app-house-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './house-card.html',
  styleUrl: './house-card.css',
})
export class HouseCard {
  readonly house = input.required<House>();
}
