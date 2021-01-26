import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Person } from "../person";

@Component({
  selector: "person-form",
  styles: ["label {display:block; }"],
  template: ` <form novalidate (ngSubmit)="onSubmit()" [formGroup]="form">
    <label>
      <span>Full name</span>
      <input type="text" placeholder="Your full name" formControlName="name" />
    </label>
    <div
      *ngIf="form.get('name').hasError('required') && form.get('name').touched"
      class="error"
    >
      Name is required
    </div>
    <div
      *ngIf="form.get('name').hasError('minlength') && form.get('name').touched"
      class="error"
    >
      Minimum of 4 characters
    </div>
    <label>
      <span>Email address</span>
      <input type="email" placeholder="Your email" formControlName="email" />
    </label>
    <div
      *ngIf="
        form.get('email').hasError('required') && form.get('email').touched
      "
      class="error"
    >
      E-Mail is required
    </div>
    <button type="submit" [disabled]="form.invalid">Save</button>
  </form>`,
})
export class PersonFormComponent implements OnInit {
  person: Person = { name: "Thomas", email: "thomas.gassmann@trivadis.com" };
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //Without FormBuilder
    // this.form = new FormGroup({
    //   name: new FormControl('Thomas', [Validators.required, Validators.minLength(4)]),
    //   email: new FormControl('thomas.gassmann@trivadis.com', Validators.required)
    // });

    //With FormBuilder
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", Validators.required],
    });

    this.form.patchValue({ ...this.person });
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
  }
}
