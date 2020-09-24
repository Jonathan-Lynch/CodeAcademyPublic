import { Injectable } from '@angular/core';
import { AuthModule } from './auth.module';

@Injectable({
  providedIn: AuthModule
})
export class AuthService {

  readonly TOKEN = 'token';
  users: any[] = [];
  get getToken(): string {
    return sessionStorage.getItem(this.TOKEN);
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username);

    if (user !== undefined && user.password === password) {
      sessionStorage.setItem(this.TOKEN, `${username}${password}`);
      return true;
    }

    return false;
  }

  add(username: string, password: string) {
    this.users.push({ username, password });
  }

  get loggedIn(): boolean {
    return this.getToken !== null ? true : false;
  }
}
