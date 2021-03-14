import { TmplAstBoundAttribute } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {HomepageComponent} from './components/homepage/homepage.component'
import {RecettesComponent} from './components/recettes/recettes.component'
import {AddrecetteComponent} from './components/addrecette/addrecette.component'
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'recette',component:RecettesComponent},
  {path:'addrecette',component:AddrecetteComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
