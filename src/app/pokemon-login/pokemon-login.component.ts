import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonsService } from '../services/pokemons.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './pokemon-login.component.html',
  styleUrl: './pokemon-login.component.css'
})
export class PokemonLoginComponent {
  
  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonsService, private router: Router){}

  loginForm = this.formBuilder.group({
    username: ['', Validators.required ],
    password: ['', Validators.required ]
  })

  login() {
    if ( ! this.loginForm.invalid ){
      let token = this.pokemonService.getMockToken( this.loginForm.value.username, this.loginForm.value.password )
      
      if( token ) {
        localStorage.setItem('tokenAuth', token)
        this.router.navigate(['pokemon-list/']);
      } else {
        alert("sorry, your credentials are not valid")
      }
    }
  }
}
