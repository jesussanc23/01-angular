import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../services/pokemons.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-login',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './pokemon-login.component.html',
  styleUrl: './pokemon-login.component.css'
})
export class PokemonLoginComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonsService, private router: Router){}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  
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

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
