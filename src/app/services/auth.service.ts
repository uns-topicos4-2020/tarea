import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  SignIn(user: any):Observable<any> {
     return this._HttpClient.post(`${environment.api_client_fine.host}/login`, user);
  }

}
