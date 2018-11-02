import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './../models/person';

@Injectable()
export class PersonService {
  private readonly apiBaseUrl: string = 'http://localhost:8180/api';

  constructor(private _http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this._http.get<Person[]>(`${this.apiBaseUrl}/persons`);
  }
  getPersonsWithGithubAccount(): Observable<Person[]> {
    return this._http.get<Person[]>(`${this.apiBaseUrl}/persons`).pipe(
      map(persons => {
        return persons.filter(p => {
          return p.githubaccount != null && p.githubaccount !== '';
        });
      })
    );
  }

  getPersonById(personId: number): Observable<Person> {
    return this._http.get<Person>(`${this.apiBaseUrl}/persons/${personId}`);
  }

  savePerson(person: Person) {
    return this._http.put(`${this.apiBaseUrl}/persons`, person);
  }
}
