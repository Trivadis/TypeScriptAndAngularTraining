import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PersonFormComponent } from "./person-form/person-form.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PersonFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
