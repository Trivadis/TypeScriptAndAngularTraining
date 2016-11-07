
import { Person } from './../../model/person';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'personFilter'
})

export class PersonFilter implements PipeTransform {
    transform(value: Person[], filterBy: string): Person[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((p: Person) => (p.firstname.toLocaleLowerCase() + p.lastname.toLocaleLowerCase()).indexOf(filterBy) !== -1) : value; 
    }
}