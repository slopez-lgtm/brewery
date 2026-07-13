import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor(private cart: BeerCartService) {
  
  }
}
