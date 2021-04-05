import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  categories: any = [
    'Entrée',
    'Plat Principal',
    'Patisseries Recettes',

  ];
  submitted = false;

  constructor(
    private myservice: RecetteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
       titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['',[Validators.required]],
      pdf: ['',[Validators.required]],
      categorie:['',[Validators.required]]

    });
  }

  ngOnInit(): void {}
  onSelectimage(event: any) {
    this.files.push(event.target.files[0]);
  }
  onSelectPdf(event: any) {
    this.files.push(event.target.files[0]);
  }
  get f() { return this.loginForm.controls; }

  addrecette() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loginForm.image = this.files[1];
    this.loginForm.pdf = this.files[0];

    this.myservice
      .addService(
        this.loginForm.value.titre,
        this.loginForm.value.description,
        this.loginForm.pdf,
        this.loginForm.image,
        this.loginForm.value.categorie)
      .subscribe((data) => {
        console.log("recette added", data)
        this.router.navigate(['recette']).then(() => {
          location.reload();
        });
      });
  }
}
