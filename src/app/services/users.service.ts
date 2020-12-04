import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  Users():Observable<any> {
    return this._HttpClient.get(`${environment.api.host}${environment.api.version}/users`);
 }

 

}
