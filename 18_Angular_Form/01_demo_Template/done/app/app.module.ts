import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PersonFormComponent } from './person-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
                 AppComponent, 
                 PersonFormComponent
                ],
  bootstrap: [AppComponent],
})
export class AppModule { }