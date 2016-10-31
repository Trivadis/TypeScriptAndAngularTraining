import { Component } from '@angular/core';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

@Component({
  selector: 'my-app',
  template: `<h1>Click a person to select it</h1>
           <p style="font-weight:bold;color:red">TODO: Integrate the HTTPModule and connect to the PersonEditorWebApi</p>
           <person-list #personList></person-list>
           <person-detail [person]="personList.selectedPerson"></person-detail>   
            `,
  providers: [PersonDataService]
})
export class AppComponent {

}

