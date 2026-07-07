import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  standalone: false, // <-- ¡AÑADE ESTA LÍNEA AQUÍ!
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.scss',
})
export class BeerListComponent {
  beer = {
    "name": "Pale Ale",
    "type": "Ale",
    "price": 5.5,
    "stock": 5,
    "image": "assets/images/pale.jpg"
  }
}