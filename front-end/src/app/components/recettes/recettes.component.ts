import { Component, OnInit } from '@angular/core';
import {RecetteService} from './../../services/recette.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  myArray: any = [];
  file: any;


  constructor(private myService: RecetteService,private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
   this.getRecette()
  }
  getfile(f: any) {
    this.file = '';
    this.file = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/uploads/recettes/' + f
    );
    console.log(f);

  }
  deleteRecette(id: string) {
    console.log(id);

    this.myService
      .deleteService(id)

      .subscribe(() => {
        return this.getRecette();
      });
  }
  getRecette(){
    this.myService.getService().subscribe((data) => {
      console.log(data);
      this.myArray = data;
    });
  }

}
