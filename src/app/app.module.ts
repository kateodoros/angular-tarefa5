import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JurossimplesComponent } from './jurossimples/jurossimples.component';
import { JuroscompostosComponent } from './juroscompostos/juroscompostos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([  
      {path: '', component: HomeComponent},
      {path: 'jurossimples', component: JurossimplesComponent},
      {path: 'juroscompostos', component: JuroscompostosComponent}
    ])
   ], 
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, JurossimplesComponent, JuroscompostosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
