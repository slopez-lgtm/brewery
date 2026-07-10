import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryBeers } from './brewery-beers/brewery-beers';
import { BreweryAbout } from './brewery-about/brewery-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full', 
  },
  {
    path: 'beers',
    component: BreweryBeers,
  },
  {
    path: 'about',
    component: BreweryAbout,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
