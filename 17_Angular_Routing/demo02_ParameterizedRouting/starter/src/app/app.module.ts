import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [AppComponent, PersonDetailComponent, PersonListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
