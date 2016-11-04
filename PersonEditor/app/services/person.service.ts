import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
//import {FRIENDS} from './persons-data';
import { Person } from './../model/person';
// import {PERSONS} from './../mock/persons-data';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PersonService {
    // private persons: Observable<Person[]>;

    constructor(private _http: Http) {
        // this.persons = PERSONS;
        // this.persons = this._http.get('http://localhost:8180/api/persons')
        //     .map(res => <Person[]>res.json());
        // .subscribe(data => this.persons = data.json());
    }
    getPersons(): Observable<Person> {
        return this._http.get('http://localhost:8180/api/persons')
            .flatMap(res => <Person[]>res.json());
    }
    getPersonsWithGithubAccount(): Observable<Person> {
        return this._http.get('http://localhost:8180/api/persons')
            .flatMap(res => <Person[]>res.json())
            .filter(p => p.githubaccount != null && p.githubaccount != "");
    }

    getPersonById(personId: number) {
        return this._http.get('http://localhost:8180/api/persons/' + personId)
            .map(res => <Person>res.json());
    }

    savePerson(person: Person) {
        // var dbPerson = this.persons.filter(f => f.id == person.id)[0];
        // dbPerson.firstname = person.firstname;
        // dbPerson.lastname = person.lastname;
        // dbPerson.githubaccount = person.githubaccount;
    }
}