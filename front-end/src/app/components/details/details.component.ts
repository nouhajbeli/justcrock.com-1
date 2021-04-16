import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {RecetteService} from './../../services/recette.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any
recette:any= {}
recettes: any = [];
constructor( private activateroute: ActivatedRoute,
    private recetteService: RecetteService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params.id;
    this.recetteService.getrecetteById(this.id).subscribe((res) => {
      this.recette = res;
      console.log('recette', this.recette);

    });
  
  }

}
