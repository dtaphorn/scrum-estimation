import { Component, OnInit }                                   from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ILogin, ILoginFormGroup }                             from 'src/app/core/interfaces/ilogin';
import { AuthenticationService }                               from 'src/app/core/services/authentication.service';

@Component({
  selector: 'se-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: ILoginFormGroup;

  constructor(
    private authentication: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    ) as ILoginFormGroup;

  }

  login() {
    const payload: ILogin = {
      username: this.username.value,
      password: this.password.value
    };

    this.authentication.login(payload).subscribe({
      next: (user) => {
        console.debug(user);
      },
      error: (err) => {
        console.debug(err);
      }}
    );
  }

  public get username(): AbstractControl {
    return this.registerForm.controls.username;
  }

  public get password(): AbstractControl {
    return this.registerForm.controls.password;
  }
}
