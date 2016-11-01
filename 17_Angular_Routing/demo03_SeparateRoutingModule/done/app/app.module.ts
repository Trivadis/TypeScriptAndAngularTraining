import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonListComponent } from './person-list.component';
import { ProgrammingLanguagesComponent } from './programming-languages.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, 
                 PersonListComponent,
                 ProgrammingLanguagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }