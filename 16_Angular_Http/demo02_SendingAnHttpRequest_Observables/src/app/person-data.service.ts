import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonDataService {
    readonly webUrl: string = "http://localhost:8180/api/Persons";

    constructor(private _http: Http) { }

    loadPersons(): Observable<Person[]> {
        return this._http.get(this.webUrl)
            .map(r => r.json() as Person[]);
    }
}