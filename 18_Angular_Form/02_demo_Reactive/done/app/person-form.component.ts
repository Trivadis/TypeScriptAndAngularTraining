import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component(
  {
    selector: 'person-form',
    styles: ['label {display:block; } .error {color:red;}'],
    template: ` 
      <form novalidate (ngSubmit)="onSubmit(person.valid)" [formGroup]="person">
          <label>
            <span>Full name</span>
            <input type="text" placeholder="Your full name"
              formControlName="name"
              >
          </label>
          <div *ngIf="person.get('name').hasError('required') 
                      && person.get('name').touched" class="error">
            Name is required
          </div>
           <div *ngIf="person.get('name').hasError('minlength') 
                      && person.get('name').touched" class="error">
            Minimum of 4 characters
          </div>
          <label>
            <span>Email address</span>
            <input type="email" placeholder="Your email"
              formControlName="email"
              >
          </label>
          <div *ngIf="person.get('email').hasError('required') 
                      && person.get('email').touched" class="error">
            E-Mail is required
          </div>
          <button type="submit" [disabled]="person.invalid">Save</button>
      </form>`
  }
)
export class PersonFormComponent implements OnInit {
  person: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //Without FormBuilder
    // this.person = new FormGroup({
    //   name: new FormControl('Thomas', [Validators.required, Validators.minLength(4)]),
    //   email: new FormControl('thomas.gassmann@trivadis.com', Validators.required)
    // });

    //With FormBuilder
    this.person = this.fb.group({
      name: ['Thomas', [Validators.required, Validators.minLength(4)]],
      email: ['thomas.gassmann@trivadis.com', Validators.required]
    });
  }
  onSubmit(valid:any) {
    console.log(valid);
  }
}