import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PersonFormComponent } from "./person-form/person-form.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, BrowserAnimationsModule, MatInputModule],
  declarations: [AppComponent, PersonFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
