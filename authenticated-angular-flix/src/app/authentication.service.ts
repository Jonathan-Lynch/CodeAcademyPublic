import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  constructor(private apiService: ApiService) { }

  async signUp(username: string, password: string): Promise<any> {
    return await this.apiService.post('auth/signup',
    {
      username,
      password,
    });
  }

  async login(username: string, password: string): Promise<void> {
    const response = await this.apiService.post('auth/login',
    {
      username,
      password
    });

    // old and busted
    this.token = response.token;

    // new hotness
    localStorage.setItem('token', this.token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== 'undefined' && token !== undefined && token !== null;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
