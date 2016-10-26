import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent }   from './components/allPersons/person-detail.component';
import { PersonListComponent }   from './components/allPersons/person-list.component';
import {PersonService} from './services/person.service';
import {PersonsOnGithubComponent} from './components/github/persons-on-github.component';

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: 'persons',  component: PersonListComponent },
  { path: 'person/:personid', component: PersonDetailComponent },
  { path: 'developers',     component: PersonsOnGithubComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}