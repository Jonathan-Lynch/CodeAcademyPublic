import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthModule } from './auth.module';

@Injectable({
  providedIn: AuthModule
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private routerService: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.loggedIn) {
      return true;
    }

    this.routerService.navigate(['signin']);
    return false;
  }

}
