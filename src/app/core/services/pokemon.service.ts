import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http:HttpClient) { }

  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage = "";
      if(error.error instanceof ErrorEvent){
        errorMessage = 'Error: ${error.error.message}';
      }else{
        errorMessage = 'Error code: ${error.status}, message: ${error.message}';
      }
      return throwError(() => errorMessage);
    }))
  }
}
