import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { BeerListComponent } from './beer-list/beer-list';
import { RouterOutlet } from '@angular/router';



import { FormsModule } from '@angular/forms';
import { BreweryAbout } from './brewery-about/brewery-about';
import { BreweryBeers } from './brewery-beers/brewery-beers';
import { RouterModule } from '@angular/router';
import { InputInteger } from './input-integer/input-integer';
import { AppRoutingModule } from './app-routing-module';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryBeers,
    BreweryAbout,
    InputInteger,
    Cart,
  ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
