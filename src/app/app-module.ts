import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app';
import { BeerListComponent } from './beer-list/beer-list';

import { AppRoutingModule } from './app-routing-module';

import {FormsModule} from '@angular/forms';
import { BreweryAbout } from './brewery-about/brewery-about';
import { BreweryBeers } from './brewery-beers/brewery-beers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryBeers,
    BreweryAbout
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule, FormsModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
