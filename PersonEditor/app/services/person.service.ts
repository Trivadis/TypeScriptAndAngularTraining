import { Injectable } from '@angular/core';
//import {FRIENDS} from './persons-data';
import { Person } from './../model/person';
// import {PERSONS} from './../mock/persons-data';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PersonService {
    private persons: Person[];

    constructor(private _http: Http) {
        // this.persons = PERSONS;
        this._http.get('http://localhost:8180/api/persons')
            // .map(res => <Person[]>res.json())
            .subscribe(data => this.persons = data.json());
    }
    getPersons() {
        return this.persons;
        // return this._http.get('http://localhost:8180/api/persons')
        //     .map(res => <Person[]>res.json());
        //     var promise = Promise.resolve(this.persons);
        //    let observable = Observable.fromPromise(promise);
        //    return observable;

    }
    getPersonsWithGithubAccount() {
        return this.persons.filter(f => f.githubaccount != null && f.githubaccount != "");

        // var promise = Promise.resolve(this.persons);
        // let observable = Observable.fromPromise(promise);
        // return observable
        //     .map(f => f.filter(f => f.githubaccount != null && f.githubaccount != ""));

    }

    getPersonById(personId: number) {
        // return this._http.get('persons.json')
        // .map(res=> <Person[]> res.json())
        // .map(persons => persons.filter(f=>f.id == personId)[0]);
        // var promise = Promise.resolve(this.persons);
        // let observable = Observable.fromPromise(promise);
        return this.persons.filter(f => f.id == personId)[0];
            // .map(persons => {
            //     var person = persons.filter(f => f.id == personId)[0]
            //     return new Person(person.id, person.firstname, person.lastname, person.githubaccount);
            // });;
    }

    savePerson(person: Person) {
        var dbPerson = this.persons.filter(f => f.id == person.id)[0];
        dbPerson.firstname = person.firstname;
        dbPerson.lastname = person.lastname;
        dbPerson.githubaccount = person.githubaccount;

    }
}