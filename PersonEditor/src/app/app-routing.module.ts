import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonsOnGithubComponent } from './components/persons-on-github/persons-on-github.component';
import { PersonDetailGuard } from './guards/person-detail.guard';

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
export class AppRoutingModule {}
