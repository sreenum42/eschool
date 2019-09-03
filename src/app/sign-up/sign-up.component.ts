import { Component, OnInit } from '@angular/core';
import { UserSignUp } from "../model/signup/user-signup.model";
import { SignupService } from "../providers/signup.service";
@Component({
  selector: 'es-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: UserSignUp;
  // tslint:disable-next-line:variable-name
  constructor(private _signupService: SignupService) {
    this.user = new UserSignUp();
  }

  ngOnInit() {
  }

  signupHandler() {
    console.log(this.user);
    this._signupService.signup(this.user).subscribe(
      (res) => {
        console.log();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
