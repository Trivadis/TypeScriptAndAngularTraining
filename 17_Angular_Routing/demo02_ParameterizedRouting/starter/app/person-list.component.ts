import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

@Component(
    {
        selector: 'person-list',
        template: `
         <p style="font-weight:bold;color:red">TODO: Implement navigation from PersonList to PersonDetail</p>
         <ul>
            <li *ngFor="let person of persons" (click)="onPersonClick(person)">
               {{person.firstname}}
             </li>
           </ul>`
    }
)
export class PersonListComponent implements OnInit {
    
    persons: Person[];

    constructor(private _personDataService: PersonDataService) { }

    ngOnInit() {
        this.persons = this._personDataService.loadPersons();
    }

    onPersonClick(person: Person) {
        // TODO: Navigate to PersonDetailComponent
    }
}