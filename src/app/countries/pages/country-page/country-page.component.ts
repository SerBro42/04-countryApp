import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {

    /* Antes de suscribirnos al observable, en primer lugar usamos pipe y tap para imprimir por
    consola el dato que ha llegado */
    /* Usamos una nueva propiedad de rxjs llamada switchMap, que toma un observable y crea un
    nuevo observable a partir de éste. El nuevo observable se llama "resp", y el siguiente
    subsrcribe se suscribe a éste. */
    /* Creamos una función que en caso de no existir el código del país que estamos buscando,
    nos devuelve a la página inicial */
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( country => {

        if( !country ) {
          return this.router.navigateByUrl('');
        }

        console.log('Tenemos un país: ',{ country });
        return;
      });
  }

}
