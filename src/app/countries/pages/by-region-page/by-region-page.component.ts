import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByRegion( term: string ):void {
    console.log('DesdeByRegionPage');
    console.log({ term });

    this.countriesService.searchRegion( term )
      .subscribe( countriesSub => {
        this.countries = countriesSub;
      });
  }
}
