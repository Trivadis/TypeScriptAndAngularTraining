import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { PersonDetailComponent }   from './components/allPersons/person-detail.component';
import { PersonListComponent }   from './components/allPersons/person-list.component';
import {PersonService} from './services/person.service';
import {PersonsOnGithubComponent} from './components/github/persons-on-github.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule ],
  declarations: [ 
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonsOnGithubComponent ],
  providers:[
    PersonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
