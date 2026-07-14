import { Component , OnInit} from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  cartList: Beer[] = [];

  constructor(private cart: BeerCartService) {
    cart.cartList.subscribe(c => this.cartList = c);
  }
  ngOnInit() {
  }
}
