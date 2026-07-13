import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  cartList: Beer[] = [];

  constructor() { }


  addToCart(beer: Beer) {
    this.cartList.push(beer);
    console.log(this.cartList.length);
  }


}