import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonDataService {
/*
TODO: Api Service anbinden (Promise oder Observable)
Api kann über PersonEditorWebApi/launchserver.bat gestartet werden (NodeJS backend)
*/
  loadPersons(): Person[] {
    return [
      { firstname: 'Silvester', lastname: 'Stallone' },
      { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
      { firstname: 'Thomas', lastname: 'Gassmann', githubaccount: 'gassmannT' },
      { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
      { firstname: 'Bruce', lastname: 'Willis' },
      { firstname: 'Lara', lastname: 'Croft' }];
  }
}