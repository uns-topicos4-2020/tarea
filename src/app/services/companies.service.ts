import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private _HttpClient: HttpClient) { }

  Read(): Observable<any> {
    return this._HttpClient.get(`${environment.api.host}${environment.api.version}/companies`).pipe(catchError(err => {
      this.handlerError(err)
      return throwError(err)
    }));
  }


  Create(data): Observable<any> {
    return this._HttpClient.post(`${environment.api.host}${environment.api.version}/companies`, data).pipe(catchError(err => {
      this.handlerError(err)
      return throwError(err)
    }));
  }

  Update(id, data): Observable<any> {
    return this._HttpClient.put(`${environment.api.host}${environment.api.version}/companies?company_id=${id}`, data).pipe(catchError(err => {
      this.handlerError(err)
      return throwError(err)
    }));
  }

  Delete(id?: String): Observable<any> {
    return this._HttpClient.delete(`${environment.api.host}${environment.api.version}/companies${(id)?'?company_id='+id: ''}`).pipe(catchError(err => {
      this.handlerError(err)
      return throwError(err)
    }));
  }

  private handlerError(err) {
    Swal.fire({
      title: '¡ERROR!',
      text: err.message,
      icon: 'error',
      confirmButtonColor: '#E54866',
    })
  }
}
