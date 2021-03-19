import { TmplAstBoundAttribute } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {HomepageComponent} from './components/homepage/homepage.component'
import {RecettesComponent} from './components/recettes/recettes.component'
import {AddrecetteComponent} from './components/addrecette/addrecette.component'
import {SignUpComponent} from './components/sign-up/sign-up.component'
import {LoginComponent}  from './components/login/login.component'
import {UserProfileComponent } from './components/user-profile/user-profile.component'
import {AuthGuard} from './components/auth/auth.guard';
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'recette',component:RecettesComponent},
  {path:'addrecette',component:AddrecetteComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'userProfile',component:UserProfileComponent,canActivate:[AuthGuard] }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
