import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

@Component(
    {
        selector: 'person-list',
        template: `
        <h1>Person list</h1>
         <ul>
            <li *ngFor="let person of persons" (click)="onPersonClick(person)">
               {{person.firstname}}
             </li>
           </ul>`
    }
)
export class PersonListComponent implements OnInit {
    
    persons: Person[];

    constructor(private _personDataService: PersonDataService,
      private _router:Router) { }

    ngOnInit() {
        this.persons = this._personDataService.loadPersons();
    }

    onPersonClick(person: Person) {
          let link = ['/person', person.id];
          this._router.navigate(link);
    }
}