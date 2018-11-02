import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
                 AppComponent, 
                 PersonFormComponent
                ],
  bootstrap: [AppComponent],
})
export class AppModule { }