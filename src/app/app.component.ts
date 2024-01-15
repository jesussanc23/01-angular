import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-angular';
  pokemons = [
      {
        "name": "bulbasaur",
        "id": 1,
        "forms_switchable": false
      },
      {
        "name": "ivysaur",
        "id": 2,
        "forms_switchable": false
      },
      {
        "name": "venusaur",
        "id": 3,
        "forms_switchable": true
      },
      {
        "name": "charmander",
        "id": 4,
        "forms_switchable": false
      },
      {
        "name": "charmeleon",
        "id": 5,
        "forms_switchable": false
      },
      {
        "name": "charizard",
        "id": 6,
        "forms_switchable": true
      }
  ];
}
