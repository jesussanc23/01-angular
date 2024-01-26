import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import DataJson from '../../assets/data.json';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons = DataJson;

  ngOnInit(): void {
    //console.log(this.pokemons)
  }
}
