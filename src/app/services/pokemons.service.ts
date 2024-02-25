import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JsonData from '../../assets/data.json';
import {fromFetch} from 'rxjs/fetch';
import { from, map, mergeMap, switchMap, toArray } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemonsList = JsonData;
  baseUrl: string = "https://pokeapi.co/api/v2/pokemon";
  apiResponse = fromFetch(`${this.baseUrl}?limit=20&offset=0`);
  pokemonos: any;

  constructor(
    private httpClient: HttpClient
  ){
    
  };

  getMockToken( username: any, password: any) {    
    return username=='hello' && password=='world' ? 'blahblahblah' : '';
  }

  getPokemonById( id: number ) {
    return this.pokemonsList.find(
      (value:any)=>{
        return value.id == id;
      }
    )
  }

  getPokemonDetails( name: string ) {
    return this.httpClient.get(
      `${this.baseUrl}/${name}`,
    )
  }

  getPokemonsList() {
    
    return this.httpClient.get(
      `${this.baseUrl}?limit=20&offset=0`,
    );
  }


  loadPokemonos() {
    if ( this.pokemonos ){
      return from([this.pokemonos]);
    } else {
      return this.apiResponse.pipe(
        switchMap((response)=>response.json()),
        mergeMap((response) => {
          //this.pokemonos = response.results;
          this.pokemonos = [];
          return from(response.results).pipe(
            mergeMap((pokemono:any)=>{
              
              return fromFetch(pokemono.url).pipe(
                switchMap((detailsResponse) => detailsResponse.json()),
                map((details)=>{
                  return details;
                })
              )
            })
          );
        }),
        toArray(),
        map((detailsArray)=>{
          detailsArray.forEach((details:any)=>{
            //Object.assign(this.pokemonos, details)
            this.pokemonos.push({...details})
          })
          return this.pokemonos;
        })
      )
    }
  }
}
