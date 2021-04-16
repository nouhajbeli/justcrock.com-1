import { Component, OnInit } from '@angular/core';
import {RecetteService} from './../../services/recette.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  myArray: any = [];
  file: any;
  categorie:any

  constructor(private myService: RecetteService,private sanitizer: DomSanitizer, private router: Router
    ) { }

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

      .subscribe((data) => {
        console.log(data)
        return this.getRecette();
      });
  }
  getRecette(){
    console.log('categorie',this.categorie)
    this.myService.getService().subscribe((data:any) => {
      console.log(data);
     if(this.categorie==='Entrée'){
      this.myArray =data.filter((recette:any) => recette.categorie === 'Entrée')
     }else if(this.categorie ==='Plat Principal'){
      this.myArray =data.filter((recette :any)=> recette.categorie === 'Plat Principal')

     }else if(this.categorie === 'Patisseries Recettes'){
      this.myArray =data.filter((recette:any )=> recette.categorie === 'Patisseries Recettes')

     }else {
      this.myArray = data;

     }
    });
  }

  handleClick(event: Event) {
    console.log('Click!', event.target)
    this.categorie=(event.currentTarget  as HTMLButtonElement).value
    console.log(this.categorie)
    this.getRecette()
  }
  getrecette(id:any){
    this.router.navigate(['details',  { id: id }]).then(() => {
      location.reload();
    });
  }

}
