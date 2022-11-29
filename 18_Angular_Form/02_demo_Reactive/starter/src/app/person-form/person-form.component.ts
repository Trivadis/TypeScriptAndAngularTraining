import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Person } from "../person";

@Component({
  selector: "person-form",
  styles: ["label {display:block; }"],
  templateUrl: 'person-form.component.html'
})
export class PersonFormComponent {
  person: Person;

  // TODO: Optionally use strong typed FormGroup
  form: FormGroup;

  // TODO: Use getters
  // get name() {
  //   // ...
  // }
  
  // get email() {
  //   // ...
  // }
}