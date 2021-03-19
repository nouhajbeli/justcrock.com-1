import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { AboutComponent } from './components/about/about.component';
import { ToprecetteComponent } from './components/toprecette/toprecette.component';
import { MembresComponent } from './components/membres/membres.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecettesComponent } from './components/recettes/recettes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddrecetteComponent } from './components/addrecette/addrecette.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import {AuthGuard} from './components/auth/auth.guard';
import {AuthInterceptor} from './components/auth/auth.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    CardsComponent,
    AboutComponent,
    ToprecetteComponent,
    MembresComponent,
    ContactComponent,
    FooterComponent,
    RecettesComponent,
    AddrecetteComponent,
    UserProfileComponent,
    SignUpComponent,
    LoginComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule





  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,},AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
