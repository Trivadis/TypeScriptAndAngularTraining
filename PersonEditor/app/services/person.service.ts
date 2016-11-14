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

    private _baseUrl: string = "http://localhost:8180/api";

    constructor(private _http: Http) {
        // this.persons = PERSONS;
        // this.persons = this._http.get('http://localhost:8180/api/persons')
        //     .map(res => <Person[]>res.json());
        // .subscribe(data => this.persons = data.json());
    }
    getPersons(): Observable<Person[]> {
        return this._http.get(this._baseUrl + "/persons")
            .map(res => <Person[]>res.json());
    }
    getPersonsWithGithubAccount(): Observable<Person> {
        return this._http.get(this._baseUrl + "/persons")
            .flatMap(res => <Person[]>res.json())
            .filter(p => p.githubaccount != null && p.githubaccount != "");
    }

    getPersonById(personId: number): Observable<Person> {
        return this._http.get(this._baseUrl + "/persons/" + personId)
            .map(res => <Person>res.json());
    }

    savePerson(person: Person) {
        return this._http.put(this._baseUrl + "/persons", person);
    }
}