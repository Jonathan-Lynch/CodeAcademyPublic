import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  formSubmit: FormGroup;
  @ViewChild('password', { static: true }) inputPassword: FormControl;

  get passwordError(): boolean {
    return this.formSubmit.hasError('passwordError');
  }

  get confirmPasswordRequired(): boolean {
    return !this.formSubmit.controls.confirmPassword.valid &&
      this.formSubmit.controls.confirmPassword.touched ;
  }

  constructor(
    private formBuilder: FormBuilder,
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
          Validators.maxLength(100)])),
      confirmPassword: new FormControl('',
        Validators.compose([Validators.required,
        Validators.maxLength(100)]))
    },
      {
        validators: this.passwordValidator
      }
    );
  }

  submit() {
    this.authService.add(this.formSubmit.controls.inputEmail.value,
      this.formSubmit.controls.confirmPassword.value);

    this.router.navigate(['/signin']);
  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get('inputPassword');
    const confirm = control.get('confirmPassword');

    if (confirm.value !== '' && password.value !== confirm.value) {
      return {passwordError: true};
    }

    return null;
  }

}
