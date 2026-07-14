import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  cartList$: Observable<Beer[]>;

  constructor(private cart: BeerCartService) {
    this.cartList$ = this.cart.cartList.asObservable()
  };

  ngOnInit(): void {
  }
}


