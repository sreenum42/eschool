import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isUserLoggedIn: boolean;
  constructor() { }
  public isLoggedIn(): boolean {
    //   after successfull login , this vairable will trun to true
    this.isUserLoggedIn = true;
    return this.isUserLoggedIn;
  }

}
