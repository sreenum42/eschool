import { Injectable } from '@angular/core';
// step 1
import { HttpClient } from "@angular/common/http";
// step 2 // need some essential files
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserSignUp } from '../model/signup/user-signup.model';

@Injectable()
export class SignupService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  signup(requestData: UserSignUp) {
    return this._httpClient.post('http://localhost:4200/api/signup', requestData);
  }
}
