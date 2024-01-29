import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class UserGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate() {
        if ( ! localStorage.getItem('tokenAuth') ) {
            this.router.navigate(['/']);
            return false;    
        }
        return true;
    }

}