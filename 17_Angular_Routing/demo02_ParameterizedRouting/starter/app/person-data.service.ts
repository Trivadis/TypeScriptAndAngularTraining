import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonDataService {
    persons: Person[] = [
        { id: 1, firstname: 'Silvester', lastname: 'Stallone' },
        { id: 2, firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
        { id: 3, firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
        { id: 4, firstname: 'Bruce', lastname: 'Willis' },
        { id: 5, firstname: 'Lara', lastname: 'Croft' }];
   
    loadPersons(): Person[] {
        return this.persons;
    }

    getPersonById(id: number): Person {
        return this.persons.find(p => p.id===id);
    }
}