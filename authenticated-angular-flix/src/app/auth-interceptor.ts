import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return next.handle(authReq);
    }

}
