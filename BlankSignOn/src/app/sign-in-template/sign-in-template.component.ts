import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in-template',
  templateUrl: './sign-in-template.component.html',
  styleUrls: ['./sign-in-template.component.css']
})
export class SignInTemplateComponent implements OnInit {

  validLogin = true;
  user: any = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.validLogin = this.authService.login(this.user.username, this.user.password);

    if (this.validLogin) {
      this.router.navigate(['/userprofile']);
    }
  }
}
