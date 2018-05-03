import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { PersonService } from '../person.service';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html'
})
export class PersonListComponent implements OnInit {
    pageTitle = 'All persons';
    personList: Person[] = [];

    constructor(
        private personService: PersonService,
        private router: Router) {
        }

    onEdit(person: Person) {
        const link = ['/person', person.id];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.personService.getPersons().subscribe(res => this.personList = res);
    }
}
