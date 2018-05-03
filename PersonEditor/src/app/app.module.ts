import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonsOnGithubComponent } from './persons-on-github/persons-on-github.component';
import { PersonService } from './person.service';
import { PersonDetailGuard } from './person-guard.service';
import { PersonFilterPipe } from './person-filter.pipe';


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
    PersonFilterPipe
  ],
  providers: [
    PersonService,
    PersonDetailGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
