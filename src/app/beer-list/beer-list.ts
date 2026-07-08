import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  standalone: false, // <-- ¡AÑADE ESTA LÍNEA AQUÍ!
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.scss',
})
export class BeerListComponent {
  beer: Beer = {
    name: "Pale Ale",
    type: "Ale",
    price: 5.5,
    stock: 5,
    image: "assets/img/pale.jpg"
  }
}