import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './components/allPersons/person-detail.component';
import { PersonListComponent } from './components/allPersons/person-list.component';
import { PersonService } from './services/person.service';
import { PersonsOnGithubComponent } from './components/github/persons-on-github.component';
import {PersonDetailGuard} from './components/allPersons/person-guard.service';

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