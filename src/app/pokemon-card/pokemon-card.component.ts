import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon : any;
  name!: string;
  id!: Number;
  forms_switchable = true;

  ngOnInit(): void {
    this.name = this.pokemon.name;
    this.id = this.pokemon.id;
    this.forms_switchable = this.pokemon.forms_switchable;
  }
}