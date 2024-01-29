import { Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CanActivate } from '@angular/router';
import { PokemonLoginComponent } from './pokemon-login/pokemon-login.component';
import { UserGuard } from './authentication/UserGuard';

export const routes: Routes = [    
    { path: '', component: PokemonLoginComponent },
    { path: 'pokemon-list', component: PokemonListComponent, canActivate: [UserGuard] }, 
    { path: 'pokemon-info', component: PokemonInfoComponent , canActivate: [UserGuard]},
    { path: 'pokemon-info/:id', component: PokemonInfoComponent, canActivate: [UserGuard]  },
];
