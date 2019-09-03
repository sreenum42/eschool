import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {  AuthService} from './providers/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  // tslint:disable-next-line:variable-name
  constructor(private router: Router, private _authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    // tslint:disable-next-line:prefer-const
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger;
    return this.canActivate(route, state);
  }
  checkLogin(url: string): boolean {
    debugger;
    if (this._authService.isLoggedIn()) {
      return true;
    }


    this.router.navigate(['/login']);
    return false;
  }
}
