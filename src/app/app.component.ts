import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { requestInterceptorInterceptor } from './interceptors/request-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ RouterOutlet, PokemonListComponent ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useValue: requestInterceptorInterceptor,
      multi: true
    }]
})
export class AppComponent {
  title = '01-angular';  
}
