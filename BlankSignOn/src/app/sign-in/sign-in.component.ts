import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSubmit: FormGroup;
  validLogin = true;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.formSubmit = this.formBuilder.group({
      inputEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(100)])
      ],
      inputPassword: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100)]))
    });
  }

  get inputPasswordInvalid() {
    return !this.formSubmit.controls.inputPassword.valid &&
      this.formSubmit.controls.inputPassword.touched;
  }
  ngOnInit() {

  }

  submit() {
    this.validLogin = this.authService.login(this.formSubmit.controls.inputEmail.value,
      this.formSubmit.controls.inputPassword.value);

    if (this.validLogin) {
      this.router.navigate(['/userprofile']);
    }
  }

}
