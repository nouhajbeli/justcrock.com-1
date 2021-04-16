import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  http: HttpClient;
  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})}

  urlApi = 'http://localhost:3000/api/user/register';
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }
  addService (
    fullName: string,
    email: string,
    password: any,

   ){
    const body = {
      fullName: fullName,
      email:email,
      password: password,
    };


    return this.http.post(this.urlApi, body,this.noAuthHeader);
   }
}
