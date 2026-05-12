import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { House } from '../house';
import { HouseCard } from '../house-card/house-card';

@Component({
  selector: 'app-house-grid',
  imports: [HouseCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './house-grid.html',
  styleUrl: './house-grid.css',
})
export class HouseGrid {
  protected readonly searchTerm = signal('');

  protected readonly houses = signal<House[]>([
    {
      id: 1,
      name: 'Cozy Cottage',
      location: '123 Main St, Anytown, USA',
      description: 'A charming cottage with a beautiful garden.',
      price: 250000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrSxn12tzF_sIHVyzl8P7p6uH6wOy_k9uxw&s',
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: '456 Elm St, Anytown, USA',
      description: 'A sleek apartment in the heart of the city.',
      price: 350000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4n9nAPe7ZCZGqD2XWrIFgRqAilitK4wwRA&s',
    },
    {
      id: 3,
      name: 'Spacious Villa',
      location: '789 Oak St, Anytown, USA',
      description: 'A luxurious villa with a private pool.',
      price: 750000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPU_Da-CZL9i_COAfi6XemPsQQdERgzWHlw&s',
    },
    {
      id: 4,
      name: 'Rustic Farmhouse',
      location: '321 Pine St, Anytown, USA',
      description: 'A charming farmhouse with a large barn.',
      price: 450000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTVTFJ1eGl8ST9CRbIMojy22oyPW78jD8oA&s',
    },
    {
      id: 5,
      name: 'Beachfront Condo',
      location: '654 Ocean Ave, Anytown, USA',
      description: 'A stunning condo with ocean views.',
      price: 550000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqvy8rSZMuJM6U-HHi8JPD8h7DdbILWmbyw&s',
    },
    {
      id: 6,
      name: 'Mountain Retreat',
      location: '987 Pine St, Anytown, USA',
      description: 'A peaceful retreat nestled in the mountains.',
      price: 650000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQXDTRApdcbZlqGsNn0V376AKEe3VtrCG7A&s',
    },
    {
      id: 7,
      name: 'City Loft',
      location: '147 Broadway, Anytown, USA',
      description: 'A modern loft in the heart of the city.',
      price: 400000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKb48L-E_fMFnGzKUTNHoT5jRylrvmvW8W5Q&s',
    }
  ]);

  protected readonly filteredHouses = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.houses();
    }

    return this.houses().filter(
      (house) =>
        house.name.toLowerCase().includes(term) || house.location.toLowerCase().includes(term) || house.description.toLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected trimSearch() {
    this.searchTerm.update((value) => value.trim());
  }
}
