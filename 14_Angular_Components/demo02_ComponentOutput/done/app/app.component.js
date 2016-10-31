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
var AppComponent = (function () {
    function AppComponent() {
        this.persons = PERSONS;
    }
    AppComponent.prototype.onPersonClick = function (person) {
        this.selectedPerson = person;
    };
    AppComponent.prototype.onRemove = function (person) {
        var index = this.persons.indexOf(person);
        if (index > -1) {
            this.persons.splice(index, 1);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Click a person to select it</h1>\n           <table>\n             <tr>\n               <th>Firstname</th>\n               <th>Lastname</th>\n               <th>Github</th>\n             </tr>     \n             <tr *ngFor=\"let person of persons\" (click)=\"onPersonClick(person)\">\n               <td>{{person.firstname}}</td>\n               <td>{{person.lastname}}</td>\n               <td>{{person.githubaccount}}</td>\n             </tr>\n           </table>\n\n           <person-detail [person]=\"selectedPerson\" (remove)=\"onRemove($event)\"></person-detail>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PERSONS = [
    { firstname: 'Silvester', lastname: 'Stallone' },
    { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
    { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
    { firstname: 'Bruce', lastname: 'Willis' },
    { firstname: 'Lara', lastname: 'Croft' }];
//# sourceMappingURL=app.component.js.map