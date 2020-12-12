import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  SignIn(user: any):Observable<any> {
    console.log(user);
     return this._HttpClient.post(`${environment.api.host}${environment.api.version}/signin`, user).pipe(tap(auth => {
       localStorage.setItem("x-session", JSON.stringify(auth));
     }))
  }

}
