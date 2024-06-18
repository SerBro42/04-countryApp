import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

/* Creamos este archivo con el propósito de guardar las rutas y URLs de la aplicación. Será nuesto
módulo especializado en navegación. El comodín '**' significa que en caso de no tener nada en
el URL, se redirige a 'home' */
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

/* El tipo de import que hagamos dependerá de si este es nuestro módulo de rutas principal o uno
secundario. Si es el principal (como es nuestro caso), se usa forRoot. De lo contrario, se usa
forChild. Pasamos como parámetro la definición de nuestras rutas (el array de objetos) */
@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
