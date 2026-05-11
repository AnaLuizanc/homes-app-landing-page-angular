import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-house-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './house-card.html',
  styleUrl: './house-card.css',
})
export class HouseCard {
  protected title = 'Product Title';
  protected description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
