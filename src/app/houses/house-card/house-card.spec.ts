import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCard } from './house-card';
import { House } from '../house';

describe('HouseCard', () => {
  let component: HouseCard;
  let fixture: ComponentFixture<HouseCard>;
  const mockHouse: House = {
    id: 1,
    name: 'Test House',
    location: 'Test Location',
    description: 'Test Description',
    price: 100000,
    imageUrl: 'https://via.placeholder.com/300',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseCard);
    fixture.componentRef.setInput('house', mockHouse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
