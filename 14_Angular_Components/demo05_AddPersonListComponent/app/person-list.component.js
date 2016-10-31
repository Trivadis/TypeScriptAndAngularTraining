"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PersonListComponent = (function () {
    function PersonListComponent() {
        this.persons = PERSONS;
    }
    PersonListComponent.prototype.onPersonClick = function (person) {
        this.selectedPerson = person;
    };
    PersonListComponent = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "<table>\n             <tr>\n               <th>Firstname</th>\n               <th>Lastname</th>\n               <th>Github</th>\n             </tr>     \n             <tr *ngFor=\"let person of persons\" (click)=\"onPersonClick(person)\">\n               <td>{{person.firstname}}</td>\n               <td>{{person.lastname}}</td>\n               <td>{{person.githubaccount}}</td>\n             </tr>\n           </table>"
        }), 
        __metadata('design:paramtypes', [])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
var PERSONS = [
    { firstname: 'Silvester', lastname: 'Stallone' },
    { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
    { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
    { firstname: 'Bruce', lastname: 'Willis' },
    { firstname: 'Lara', lastname: 'Croft' }];
//# sourceMappingURL=person-list.component.js.map