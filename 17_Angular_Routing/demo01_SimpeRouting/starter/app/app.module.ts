import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { ProgrammingLanguagesComponent } from './programming-languages.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, 
                 PersonListComponent,
                 ProgrammingLanguagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }