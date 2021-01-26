import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonListComponent } from "./person-list/person-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, PersonDetailComponent, PersonListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
