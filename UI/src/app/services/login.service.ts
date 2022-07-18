import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly APIUrl = 'https://localhost:7285/api/'
  constructor(private http:HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(this.APIUrl+'User')
  }

  loginverify(val: any): Observable<any> {
    return this.http.post(this.APIUrl+'User', val)
  }
}
