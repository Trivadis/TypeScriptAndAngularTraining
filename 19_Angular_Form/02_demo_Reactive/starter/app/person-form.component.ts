import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component(
  {
    selector: 'person-form',
    styles: ['label {display:block; }'],
    template: ` 
      TODO: Bind person object to form and make each input required using reactive form approach  
      <form novalidate>
          <label>
            <span>Full name</span>
            <input type="text" name="name" placeholder="Your full name">
          </label>
          <label>
            <span>Email address</span>
            <input type="email" name="email" placeholder="Your email">
          </label>
          <button type="submit">Save</button>
      </form>`
  }
)
export class PersonFormComponent {
  person:Person = {name: 'Thomas', email: 'thomas.gassmann@trivadis.com'}
}