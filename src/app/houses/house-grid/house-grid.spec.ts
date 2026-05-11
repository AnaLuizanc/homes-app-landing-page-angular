import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseGrid } from './house-grid';

describe('HouseGrid', () => {
  let component: HouseGrid;
  let fixture: ComponentFixture<HouseGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
