import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModal } from './house-modal';

describe('HouseModal', () => {
  let component: HouseModal;
  let fixture: ComponentFixture<HouseModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseModal],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
