import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  /* Importamos y declaramos el servicio de países para realizar nuestras búsquedas. Lo inyectamos
  en el constructor */
  constructor( private countriesService: CountriesService ) {}

  searchByCapital( term: string ):void {
    console.log('DesdeByCapitalPage');
    console.log({ term });

    this.countriesService.searchCapital( term )
      .subscribe( countriesSub => {
        this.countries = countriesSub;
      });
  }
}
