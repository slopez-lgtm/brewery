import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListComponent } from './beer-list';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
