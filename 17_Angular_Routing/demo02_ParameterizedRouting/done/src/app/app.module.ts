import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes = [
  { path: "persons", component: PersonListComponent },
  { path: "person/:id", component: PersonDetailComponent },
  { path: "", redirectTo: "/persons", pathMatch: "full" },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  declarations: [AppComponent, PersonDetailComponent, PersonListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
