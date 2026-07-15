import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  standalone: false, // <-- ¡AÑADE ESTA LÍNEA AQUÍ!
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.scss',
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];


  constructor(private cart: BeerCartService,
    private beersDataService: BeerDataService
  ) { }

  ngOnInit(): void {
    this.beersDataService.getAll()
      .subscribe(beers => this.beers = beers);
  }

  addToCart(beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;

    console.log('1. Click en comprar cerveza:', { name: beer.name, quantity: beer.quantity });
  }

  maxReached(m: string) {
    alert(m);
  }
}