import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Person } from './../../model/person';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './../../services/person.service';

@Component(
    {
        moduleId: module.id,
        selector: 'person-list',
        templateUrl: 'person-list.component.html',
        styleUrls: ['person-list.component.css']
    }
)
export class PersonListComponent implements OnInit {
    pageTitle:string = "All persons";
    listFilter: string;
    personList: Person[] = [];

    constructor(
        private personService: PersonService,
        private router: Router) {
    }

    onEdit(person: Person) {
        let link = ['/person', person.id];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.personService.getPersons()
            .subscribe(res => this.personList = res);
    }
}
