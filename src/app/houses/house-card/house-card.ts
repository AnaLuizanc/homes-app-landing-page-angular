import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { House } from '../house';
import { HouseModal } from '../house-modal/house-modal';

@Component({
  selector: 'app-house-card',
  imports: [MatCardModule, MatButtonModule, HouseModal],
  templateUrl: './house-card.html',
  styleUrl: './house-card.css',
})
export class HouseCard {
  readonly house = input.required<House>();
  protected readonly isModalOpen = signal(false);

  protected openModal(): void {
    this.isModalOpen.set(true);
  }

  protected closeModal(): void {
    this.isModalOpen.set(false);
  }
}
