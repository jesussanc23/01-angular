import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import DataJson from '../../assets/data.json';
import { PokemonsService } from '../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons = DataJson;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ){}

  ngOnInit(): void {
    //console.log(this.pokemons)
    this.pokemons = this.pokemonsService.pokemonsList;
    this.pokemonsService.getPokemonsList().subscribe((response: any)=>{
      this.pokemons = response.results ?? [];
      
    });
  }

  logout(){
    console.log("click event worked");
    localStorage.removeItem('tokenAuth');
    this.router.navigate(['/']);
  }
}
