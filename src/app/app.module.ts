import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 1f1abe1732d3c3e880789f1bd9e17820eeeeacea

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    AboutComponent
>>>>>>> 1f1abe1732d3c3e880789f1bd9e17820eeeeacea
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
