import { Component, OnInit } from '@angular/core';
import {SignUpService} from './../../services/sign-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
FullName:any;
email:any;
password:any;
registerForm: any;
submitted = false;
  constructor(private myService: SignUpService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
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
        this.router.navigateByUrl('/login')



      })
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.adduser()
      // display form values on success
  }

}
