import { Component, OnInit } from '@angular/core';
import {SignUpService} from './../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
FullName:any;
email:any;
password:any;
  constructor(private myService: SignUpService) { }

  ngOnInit(): void {
  }
  adduser() {


    this.myService
      .addService(
        this.FullName,
        this.email,
        this.password,
    )
      .subscribe((data) => {
        console.log("user added", data)


      })
    }

}
