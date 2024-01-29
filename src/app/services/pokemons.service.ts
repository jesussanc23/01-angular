import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JsonData from '../../assets/data.json';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemonsList = JsonData;
  baseUrl: string = "https://pokeapi.co/api/v2/pokemon";
  constructor(
    private httpClient: HttpClient
  ){};

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
      `${this.baseUrl}?limit=10&offset=0`,
    );
  }
}
