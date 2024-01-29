import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon : any;
  name!: string;
  id!: Number;
  url!: string;
  forms_switchable = true;

  ngOnInit(): void {
    this.name = this.pokemon.name;
    this.id = this.pokemon.name;
    this.url = this.pokemon.url;
  }
}
