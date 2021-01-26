import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonDataService } from "./person-data.service";

@NgModule({
  declarations: [AppComponent, PersonDetailComponent, PersonListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PersonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
