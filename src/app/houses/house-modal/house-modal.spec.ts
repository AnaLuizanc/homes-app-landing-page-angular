import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModal } from './house-modal';
import { House } from '../house';

describe('HouseModal', () => {
  let component: HouseModal;
  let fixture: ComponentFixture<HouseModal>;
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
      imports: [HouseModal],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseModal);
    fixture.componentRef.setInput('house', mockHouse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
