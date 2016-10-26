import {Injectable} from '@angular/core';
//import {FRIENDS} from './persons-data';
import {Person} from './../model/person';
import {FRIENDS} from './../mock/persons-data';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PersonService{
    private persons:Person[];
    constructor(private _http:Http){
        this.persons = FRIENDS;
    }
    getPersons()
    {
        // return this._http.get('persons.json')
        //  .map(res=> <Person[]> res.json());
        var promise = Promise.resolve(this.persons);
       let observable = Observable.fromPromise(promise);
       return observable;
        
    }
    getPersonsWithGithubAccount()
     {
   
        var promise = Promise.resolve(this.persons);
       let observable = Observable.fromPromise(promise);
       return observable
       .map(f=>f.filter(f=> f.githubaccount!=null && f.githubaccount!=""));
        
    }
    
    getPersonById(personId:number){
        // return this._http.get('persons.json')
        // .map(res=> <Person[]> res.json())
        // .map(persons => persons.filter(f=>f.id == personId)[0]);
          var promise = Promise.resolve(this.persons);
       let observable = Observable.fromPromise(promise);
       return observable
        .map(persons => 
        {
          var person = persons.filter(f=>f.id == personId)[0]
          return new Person(person.id, person.firstname,person.githubaccount);
        });;
    }
    
    savePerson(person:Person)
    {
          var dbPerson = this.persons.filter(f=>f.id == person.id)[0]
          dbPerson.firstname = person.firstname;
          dbPerson.githubaccount = person.githubaccount;
          
    }
}