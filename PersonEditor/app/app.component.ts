import {Component} from '@angular/core';
import {Person} from './model/person';
import {PersonListComponent} from './components/allPersons/person-list.component';
import {PersonDetailComponent} from './components/allPersons/person-detail.component';

@Component(
    {
        selector:'my-app',
        template: `<h1>Person Editor</h1>
        <div class="btn-group">
                  <a routerLink="/persons" class="btn btn-primary">All Persons</a>
                  <a routerLink="/developers" class="btn btn-primary">Developers</a>

                  </div>
                  <router-outlet></router-outlet> `
    }
)
export class AppComponent{
}



