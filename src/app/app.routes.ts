import { Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [    
    { path: '', component: PokemonListComponent },
    { path: 'pokemon-info', component: PokemonInfoComponent },
    { path: 'pokemon-info/:id', component: PokemonInfoComponent },
];
