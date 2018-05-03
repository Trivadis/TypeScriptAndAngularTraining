import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonDetailComponent } from './../person-detail/person-detail.component';
import { PersonListComponent } from './../person-list/person-list.component';
import { PersonsOnGithubComponent } from './../persons-on-github/persons-on-github.component';
import { PersonDetailGuard } from './../person-guard.service';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'person/:personId', canActivate: [PersonDetailGuard], component: PersonDetailComponent },
  { path: 'developers', component: PersonsOnGithubComponent },
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: '**', redirectTo: '/persons', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
