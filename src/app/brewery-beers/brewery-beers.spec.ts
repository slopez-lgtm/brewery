import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryBeers } from './brewery-beers';

describe('BreweryBeers', () => {
  let component: BreweryBeers;
  let fixture: ComponentFixture<BreweryBeers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryBeers],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryBeers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
