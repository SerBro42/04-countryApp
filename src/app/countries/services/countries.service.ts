import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  /* La URL https://restcountries.com/v3.1/capital/{capital} fue obtenida de la web REST
  Countries */
  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  /* Modificamos este método de tal modo que en vez de devolver un array de países, nos devuelva
  un único país o bien null */
  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null) )
      );
  }

  /* La función searchCapital usa un HttpClient para conectarse con la API restcountries y
   devuelve un observable en forma de array de países */
  /* Usamos el método .pipe propio de rxjs para hacer diversas operaciones con los datos del
  observable, como por ejemplo tap() y map(). Los operadores se ejecutan en el mismo orden en
  que aparecen enumerados dentro de .pipe */
  /* Ponemos en el pipe un catchError. El operador "of" devuelve un array vacío en caso de que
  se introduzca un valor incorrecto en la barra de búsqueda. De este modo, si insertamos un valor
  correcto y acto seguido uno incorrecto, nos sale el mensaje "No hay países que mostrar" */
  searchCapital( searchTerm: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ searchTerm }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }

  searchCountry( searchTerm: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ searchTerm }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );

  }

  searchRegion( searchTerm: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ searchTerm }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      )

  }

}
