import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  private _cartList: Beer[] = [];

  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject([]);

  constructor() { }


  addToCart(beer: Beer) {

    console.log('2A. Servicio recibió cerveza:', beer);
    let item: Beer = this._cartList.find((v1) => v1.name  == beer.name);
    if (!item) {
      this._cartList.push({ ...beer });
    } else {
      item.quantity += beer.quantity;
    }

    console.log(this.cartList);
    this.cartList.next(this._cartList);
  }


}