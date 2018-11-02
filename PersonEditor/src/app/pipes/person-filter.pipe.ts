import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './../models/person';

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {
  transform(value: Person[], filterBy: string): Person[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? value.filter(
          (p: Person) =>
            (p.firstname.toLocaleLowerCase() + p.lastname.toLocaleLowerCase()).indexOf(filterBy) !==
            -1
        )
      : value;
  }
}
