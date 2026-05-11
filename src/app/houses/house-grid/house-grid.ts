import { Component, signal } from '@angular/core';
import { HouseCard } from '../house-card/house-card';
import { House } from '../house';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-house-grid',
  imports: [HouseCard, MatIcon],
  templateUrl: './house-grid.html',
  styleUrl: './house-grid.css',
})
export class HouseGrid {
  protected readonly houses = signal<House[]>([
    {
      id: 1,
      name: 'Cozy Cottage',
      location: '123 Main St, Anytown, USA',
      description: 'A charming cottage with a beautiful garden.',
      price: 250000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrSxn12tzF_sIHVyzl8P7p6uH6wOy_k9uxw&s'
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: '456 Elm St, Anytown, USA',
      description: 'A sleek apartment in the heart of the city.',
      price: 350000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4n9nAPe7ZCZGqD2XWrIFgRqAilitK4wwRA&s'
    },
    {
      id: 3,
      name: 'Spacious Villa',
      location: '789 Oak St, Anytown, USA',
      description: 'A luxurious villa with a private pool.',
      price: 750000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPU_Da-CZL9i_COAfi6XemPsQQdERgzWHlw&s'
    }
  ]);
}
