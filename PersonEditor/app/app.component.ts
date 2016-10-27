import { Component, NgZone, Input } from '@angular/core';
import { Person } from './model/person';
import { PersonListComponent } from './components/allPersons/person-list.component';
import { PersonDetailComponent } from './components/allPersons/person-detail.component';
import { Router, Event } from '@angular/router';

@Component(
    {
        selector: 'my-app',
        template: `<h1>Person Editor</h1>
        <ul class="nav nav-pills">
               <li [class.active]="url.startsWith('/person')"><a routerLink="/persons">All Persons</a></li>
               <li [class.active]="url==='/developers'">  <a routerLink="/developers" >Developers</a></li>
            </ul>
           <router-outlet></router-outlet> `
    }
)
export class AppComponent {
    url: string;
    constructor(private router: Router) {
        this.url = "";
        this.router.events.subscribe(e => this.onRouterEvent(e));
    }
    onRouterEvent(event: Event) {
        this.url = event.url;
    }

}



