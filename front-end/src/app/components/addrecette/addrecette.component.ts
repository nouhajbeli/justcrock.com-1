import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {RecetteService} from './../../services/recette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrecette',
  templateUrl: './addrecette.component.html',
  styleUrls: ['./addrecette.component.css']
})
export class AddrecetteComponent implements OnInit {
  loginForm: any;
  files: any = [];

  constructor(
    private myservice: RecetteService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      titre: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      pdf: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),

    });
  }

  ngOnInit(): void {}
  onSelectimage(event: any) {
    this.files.push(event.target.files[0]);
  }
  onSelectPdf(event: any) {
    this.files.push(event.target.files[0]);
  }
  addrecette() {
    this.loginForm.image = this.files[1];
    this.loginForm.pdf = this.files[0];

    this.myservice
      .addService(
        this.loginForm.value.titre,
        this.loginForm.value.description,
        this.loginForm.pdf,
        this.loginForm.image)
      .subscribe((data) => {
        console.log("recette added", data)
        this.router.navigate(['recette']).then(() => {
          location.reload();
        });
      });
  }
}
