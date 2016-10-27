import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Person } from './../../model/person';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './../../services/person.service';

@Component(
    {
        selector: 'person-list',
        template: `
         <h2>All Persons</h2>
         <ul class="list-group">
           <li class="list-group-item" *ngFor="let person of personList" (click)="onEdit(person)">
             {{person.firstname}} <span *ngIf="person.githubaccount">(Github: {{person.githubaccount}})</span>
           </li>
           
         </ul>
      `
    }
)
export class PersonListComponent implements OnInit {

    personList: Person[]

    constructor(
        private personService: PersonService,
        private router: Router) {
    }

    onEdit(person: Person) {
        let link = ['/person', person.id];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.personService.getPersons().subscribe(res => this.personList = res);
    }
}
