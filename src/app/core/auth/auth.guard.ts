import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
    
    constructor(
        private userService: UserService,
        private router: Router
        ) {}
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            if (this.userService.islogged()) {
                this.router.navigate(['u']);
                return false;
            }
            return true;
    }

}