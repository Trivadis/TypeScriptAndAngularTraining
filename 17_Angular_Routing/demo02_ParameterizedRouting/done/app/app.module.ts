import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonListComponent } from './person-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
   { path:'persons', component:PersonListComponent},
   { path:'person/:id', component:PersonDetailComponent},
   { path: '', redirectTo:'/persons', pathMatch: 'full'}
  ])],
  declarations: [AppComponent, 
                 PersonDetailComponent,
                 PersonListComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }