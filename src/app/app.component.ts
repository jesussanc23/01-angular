import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ RouterOutlet, PokemonListComponent ],
    providers: []
})
export class AppComponent {
  title = '01-angular';  
}
