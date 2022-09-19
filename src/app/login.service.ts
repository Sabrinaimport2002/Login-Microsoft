import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers: object;
  personalAccessToken!: string;

  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa("" + ":" + this.personalAccessToken)
      }),
    }
  }

  get(){
    console.log(this.headers);
    let endpoint = '';
    return this.http.get<any>(`${environment.url}${endpoint}`, this.headers);
  }
}
