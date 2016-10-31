import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';
import { ProgrammingLanguagesComponent } from './programming-languages.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([  
     { path: 'languages', component: ProgrammingLanguagesComponent},
     { path: 'persons', component: PersonListComponent },
     { path: '', redirectTo:'/persons', pathMatch: 'full'}
    ])],

  declarations: [AppComponent, 
                 PersonListComponent,
                 ProgrammingLanguagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }