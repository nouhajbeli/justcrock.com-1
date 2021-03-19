import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from './../../services/user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService:UserService,private router:Router) { }
  model={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages:any;

  ngOnInit(): void {
    if(this.myService.isLoggedIn()){
      this.router.navigateByUrl('/userProfile')
    }
  }
  onSubmit(form:NgForm){
    this.myService.login(form.value).subscribe(
      (res:any)  =>{
      this.myService.setToken(res['token'])
      this.router.navigateByUrl('/userProfile')
      },
      err =>{
         this.serverErrorMessages=err.error.message
      }
    )
  }

}
