import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  /* La URL https://restcountries.com/v3.1/capital/{capital} fue obtenida de la web REST
  Countries */
  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  /* La función searchCapital usa un HttpClient para conectarse con la API restcountries y
   devuelve un observable en forma de array de países */
  searchCapital( searchTerm: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ searchTerm }`;

    return this.http.get<Country[]>( url );

  }

}
