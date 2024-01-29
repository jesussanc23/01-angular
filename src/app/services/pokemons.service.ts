import { Injectable, OnInit } from '@angular/core';
import JsonData from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService implements OnInit{
  pokemonsList = JsonData;

  ngOnInit(): void {
    this.pokemonsList = JsonData;    
  }

  getPokemonById( id: number ) {
    return this.pokemonsList.find(
      (value)=>{
        return value.id == id;
      }
    )
  }
}
