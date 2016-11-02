import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonListComponent } from './person-list.component';

@NgModule({
  imports: [BrowserModule, 
            FormsModule,
            HttpModule],
  declarations: [AppComponent,
    PersonDetailComponent,
    PersonListComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }