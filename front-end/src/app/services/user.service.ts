import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})}
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }
  login(authCredentials:any){
    return this.http.post('http://localhost:3000/api/user/authenticate',authCredentials,this.noAuthHeader)
  }
  setToken(token:any){
    localStorage.setItem('token',token)
  }
  deleteToken(){
    localStorage.removeItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getUserPayload(){
    var token=this.getToken()
    if(token){
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload)
    }else {
      return null
    }
  }
  getUserProfile(){
    return this.http.get('http://localhost:3000/api/user/userProfile')
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload()
    if(userPayload){
      return userPayload.exp > Date.now() /1000
    }else {
      return false
    }
  }
}
