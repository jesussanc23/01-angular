import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HectogramsPipe } from '../pipes/hectograms.pipe';
import { DecimetersPipe } from '../pipes/decimeters.pipe';
import { Router, ActivatedRoute, Params, RouterLink} from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [ CommonModule, HectogramsPipe, DecimetersPipe, RouterLink ],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css',
  providers: [PokemonsService]
})
export class PokemonInfoComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pokemonService: PokemonsService
  ) {}
  
  id: any;
  pokemon: any;

  ngOnInit(): void {
    this._route.params.forEach((params: Params)=>{
      this.id = params['id'];
    });
    this._pokemonService.getPokemonDetails(this.id).subscribe((response:any)=>{
      this.pokemon = response;
    });
  }

}
