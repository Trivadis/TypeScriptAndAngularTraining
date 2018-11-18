import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonsOnGithubComponent } from './components/persons-on-github/persons-on-github.component';
import { PersonDetailGuard } from './guards/person-detail.guard';
import { PersonFilterPipe } from './pipes/person-filter.pipe';
import { GithubService } from './services/github.service';
import { PersonService } from './services/person.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonsOnGithubComponent,
    PersonFilterPipe
  ],
  providers: [PersonService, GithubService, PersonDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
