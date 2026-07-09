import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app';
import { BeerListComponent } from './beer-list/beer-list';

import { AppRoutingModule } from './app-routing-module';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
