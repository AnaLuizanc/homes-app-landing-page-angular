import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css',
})
export class ProductsCard {
  protected title = 'Product Title';
  protected description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
