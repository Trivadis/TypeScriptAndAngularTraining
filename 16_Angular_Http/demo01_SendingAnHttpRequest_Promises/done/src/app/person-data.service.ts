import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Person } from './person';

@Injectable()
export class PersonDataService {
  readonly webUrl: string = 'http://localhost:8180/api/Persons';

  constructor(private _http: HttpClient) {}

  loadPersons(): Promise<Person[]> {
    return this._http
      .get<Person[]>(this.webUrl)
      .toPromise()
      .catch(this.handleError);
  }
  handleError(error: any) {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
