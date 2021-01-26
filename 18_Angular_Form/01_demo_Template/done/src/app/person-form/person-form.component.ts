import { Component } from "@angular/core";
import { Person } from "../person";

@Component({
  selector: "person-form",
  styles: ["label {display:block; }"],
  template: ` <form (ngSubmit)="onSubmit(personForm)" #personForm="ngForm">
    <label>
      <span>Full name</span>
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        required
        minlength="4"
        [(ngModel)]="person.name"
        #userName="ngModel"
      />
    </label>
    <div *ngIf="userName.errors?.required && userName.touched" class="error">
      Name is required
    </div>
    <div *ngIf="userName.errors?.minlength && userName.touched" class="error">
      Minimum of 4 characters
    </div>
    <label>
      <span>Email address</span>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        [(ngModel)]="person.email"
        #email="ngModel"
      />
    </label>
    <div *ngIf="email.errors?.required && email.touched" class="error">
      E-Mail is required
    </div>
    <button type="submit" [disabled]="personForm.invalid">Save</button>
  </form>`,
})
export class PersonFormComponent {
  person: Person = { name: "Thomas", email: "thomas.gassmann@trivadis.com" };

  onSubmit({ value, valid }: { value: Person; valid: boolean }) {
    console.log(value, valid);
  }
}
