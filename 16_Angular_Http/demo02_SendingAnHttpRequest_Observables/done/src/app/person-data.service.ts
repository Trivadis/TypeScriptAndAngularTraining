import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonDataService {
  readonly webUrl: string = 'http://localhost:8180/api/Persons';

  constructor(private _http: HttpClient) {}

  loadPersons(): Observable<Person[]> {
    return this._http.get<Person[]>(this.webUrl);
  }
}
