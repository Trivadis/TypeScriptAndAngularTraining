import { Component, OnInit } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Person } from "../person";

@Component({
  selector: "person-form",
  styles: ["label {display:block; }"],
  templateUrl: 'person-form.component.html'
})
export class PersonFormComponent implements OnInit {
  person: Person;
  form: FormGroup<Person>;

  constructor(private fb: NonNullableFormBuilder) {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  ngOnInit() {
    //Without FormBuilder
    // this.form = new FormGroup({
    //   name: new FormControl('Thomas', [Validators.required, Validators.minLength(4)]),
    //   email: new FormControl('thomas@mail.com', Validators.required)
    // });

    //With FormBuilder
    this.form = this.fb.group({
      name: ["Francesco Leardini", [Validators.required, Validators.minLength(4)]],
      email: ["testmail@mail.com", Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
  }
}
