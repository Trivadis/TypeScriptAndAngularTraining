import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

import { Person } from './../model/person';

@Injectable()
export class PersonService {

    private readonly apiBaseUrl: string = "http://localhost:8180/api";

    constructor(
        private _http: Http
    ) {
    }

    getPersons(): Observable<Person[]> {
        return this._http.get(`${this.apiBaseUrl}/persons`)
            .map(res => res.json() as Person[]);
    }
    getPersonsWithGithubAccount(): Observable<Person> {
        return this._http.get(`${this.apiBaseUrl}/persons`)
            .flatMap(res => res.json() as Person[])
            .filter(p => p.githubaccount != null && p.githubaccount != "");
    }

    getPersonById(personId: number): Observable<Person> {
        return this._http.get(`${this.apiBaseUrl}/persons/${personId}`)
            .map(res => res.json() as Person);
    }

    savePerson(person: Person) {
        return this._http.put(`${this.apiBaseUrl}/persons`, person);
    }
}