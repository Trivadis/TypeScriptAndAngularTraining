import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list.component';
import { ProgrammingLanguagesComponent } from './programming-languages.component';

const routes: Routes = [  
     { path: 'languages', component: ProgrammingLanguagesComponent},
     { path: 'persons', component: PersonListComponent },
     { path: '', redirectTo:'/persons', pathMatch: 'full'}
    ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}