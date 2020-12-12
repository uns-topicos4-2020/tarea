import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService implements HttpInterceptor{
  constructor(private _router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const session: any = JSON.parse(localStorage.getItem("x-session"));
    let request = req;
    if (session) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ session.token }`,
        }
      });
    }
    return next.handle(request);
  }

}
