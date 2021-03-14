import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AlertModule } from 'ngx-bootstrap';





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
    AddrecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    AlertModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
