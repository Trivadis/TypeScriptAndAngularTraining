import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonDataService {
  readonly webUrl: string = 'http://localhost:8180/api/Persons';

  constructor(private http: HttpClient) {}

  loadPersons(): Promise<Person[]> {
    const persons$ = this.http.get<Person[]>(this.webUrl)
    return lastValueFrom(persons$).catch(this.handleError);
  }
  handleError(error: any) {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
