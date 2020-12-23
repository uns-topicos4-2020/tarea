import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private _HttpClient: HttpClient) { }

  Read(): Observable<any> {
    return this._HttpClient.get(`${environment.api.host}${environment.api.version}/companies`).pipe(catchError((err: Error) => {
      this.AlertMessage(err)
      return throwError(err)
    }));
  }


  Create(data): Observable<any> {
    return this._HttpClient.post(`${environment.api.host}${environment.api.version}/companies`, data).pipe(tap(ok => {
      this.AlertMessage(new String(`The company ${data.name} was registered`));
      return ok;
    }, (err: Error) => {
      this.AlertMessage(err)
      return throwError(err)
    }));
  }

  Update(id, data): Observable<any> {
    return this._HttpClient.put(`${environment.api.host}${environment.api.version}/companies?company_id=${id}`, data).pipe(tap(ok => {
      this.AlertMessage(new String(`The company ${data.name} was updated`));
      return ok;
    }, (err: Error) => {
      this.AlertMessage(err)
      return throwError(err)
    }));
  }

  Delete(id?: String, data?): Observable<any> {
    return this._HttpClient.delete(`${environment.api.host}${environment.api.version}/companies${(id) ? '?company_id=' + id : ''}`).pipe(tap(ok => {
      this.AlertMessage(new String(`The company ${data.name} was removed`));
      return ok;
    }, (err: Error) => {
      this.AlertMessage(err)
      return throwError(err)
    }));
  }

  private AlertMessage(except) {
    console.log("except: ", typeof(except))
    Swal.fire({
      title: (except instanceof String)?"SUCESSFULL":'¡ERROR!',
      text: (except instanceof String)?except:except.error.message || except.message,
      icon: (except instanceof String)?'success':'error',
      confirmButtonColor: '#E54866',
    })
  }

}
