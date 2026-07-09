import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  standalone: false, // <-- ¡AÑADE ESTA LÍNEA AQUÍ!
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.scss',
})
export class BeerListComponent {
  beers: Beer[] = [
    {
      name: "Pale Ale",
      type: "Ale",
      price: 5.5,
      stock: 0,
      image: "assets/img/pale.jpg",
      clearance: false,
      quantity: 0
    },
    {
      name: "Lager",
      type: "Lager",
      price: 4.0,
      stock: 0,
      image: "assets/img/lager.jpg",
      clearance: false,
      quantity: 0
    },
    {
      name: "Stout",
      type: "Stout",
      price: 6.0,
      stock: 3,
      image: "assets/img/stout.jpg",
      clearance: true,
      quantity: 0
    },
    {
      name: "Stout",
      type: "Stout",
      price: 6.0,
      stock: 3,
      image: "assets/img/stout.jpg",
      clearance: true,
      quantity: 0
    }
  ];



  constructor() { }

  upQuantity(beer: Beer): void {
    if (beer.quantity < beer.stock) {
      beer.quantity++;
    }
  }

  downQuantity(beer: Beer): void {
    if (beer.quantity > 0) {
      beer.quantity--;
    }
  }

  changeQuantity(event, beer: Beer): void {
    console.log(event.target.value);
  }
}