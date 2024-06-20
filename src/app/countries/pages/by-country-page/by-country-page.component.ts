import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCountry( term: string ):void {
    console.log('DesdeByCountryPage');
    console.log({ term });

    this.countriesService.searchCountry( term )
      .subscribe( countriesSub => {
        this.countries = countriesSub;
      });
  }
}
