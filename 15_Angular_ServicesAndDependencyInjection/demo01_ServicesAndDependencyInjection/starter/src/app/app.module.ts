import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
