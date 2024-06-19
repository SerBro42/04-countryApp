import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

/* Siguiendo lo cambios de app-routing.module, añadimos el path: ** para redirigirnos por
defecto a 'Por capital' */
const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }
]

/* De manera similar a app-routing.module.ts, definimos el módulo de rutas, pero este módulo es
secundario, por lo que se usa forChild en vez de forRoot */
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
