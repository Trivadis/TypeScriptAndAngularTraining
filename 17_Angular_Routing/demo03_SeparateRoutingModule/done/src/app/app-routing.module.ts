import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonListComponent } from "./person-list/person-list.component";

const routes = [
  { path: "persons", component: PersonListComponent },
  { path: "person/:id", component: PersonDetailComponent },
  { path: "", redirectTo: "/persons", pathMatch: "full" },
  { path: "**", redirectTo: "/persons", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
