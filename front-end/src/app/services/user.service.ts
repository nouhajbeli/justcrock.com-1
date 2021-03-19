import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }
  login(authCredentials:any){
    return this.http.post('http://localhost:3000/api/user/authenticate',authCredentials)
  }
  setToken(token:any){
    localStorage.setItem('token',token)
  }
  deleteToken(){
    localStorage.removeItem('token')
  }
  getUserPayload(){
    var token=localStorage.getItem('token')
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
