import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonDataService {
  readonly webUrl:string="http://localhost:8180/api/Persons";

  constructor(private _http: Http) { }

  loadPersons(): Promise<Person[]> {
      return this._http.get(this.webUrl)
        .toPromise()
        .then(r=>r.json() as Person[])
        .catch(this.handleError);
  }
  handleError(error:any)
  {
     console.log(error);
     return Promise.reject(error.message || error)
  }
}