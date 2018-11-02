import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailGuard } from './guards/person-detail.guard';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonsOnGithubComponent } from './persons-on-github/persons-on-github.component';
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
