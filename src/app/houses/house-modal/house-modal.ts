import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { House } from '../house';

@Component({
  selector: 'app-house-modal',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './house-modal.html',
  styleUrl: './house-modal.css',
})
export class HouseModal {
  readonly house = input.required<House>();
  readonly close = output<void>();

  protected closeModal(): void {
    this.close.emit();
  }
}
