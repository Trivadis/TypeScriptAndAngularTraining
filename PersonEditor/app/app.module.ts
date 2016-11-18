import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './components/allPersons/person-detail.component';
import { PersonListComponent } from './components/allPersons/person-list.component';
import { PersonsOnGithubComponent } from './components/github/persons-on-github.component';
import { PersonFilter } from './pipes/person-filter.pipe';
import { PersonDetailGuard } from './services/person-guard.service';
import { PersonService } from './services/person.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonsOnGithubComponent,
    PersonFilter
  ],
  providers: [
    PersonService,
    PersonDetailGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
