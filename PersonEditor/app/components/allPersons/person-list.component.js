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
var router_1 = require('@angular/router');
var person_service_1 = require('./../../services/person.service');
var PersonListComponent = (function () {
    function PersonListComponent(personService, router) {
        this.personService = personService;
        this.router = router;
    }
    PersonListComponent.prototype.onEdit = function (person) {
        var link = ['/person', person.id];
        this.router.navigate(link);
    };
    PersonListComponent.prototype.ngOnInit = function () {
        // this.personService.getPersons().subscribe(res => this.personList = res);
        this.personList = this.personService.getPersons();
    };
    PersonListComponent = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "\n         <h2>All Persons</h2>\n         <ul class=\"list-group\">\n           <li class=\"list-group-item\" *ngFor=\"let person of personList\" (click)=\"onEdit(person)\">\n             {{person.firstname}} <span *ngIf=\"person.githubaccount\">(Github: {{person.githubaccount}})</span>\n           </li>\n           \n         </ul>\n      "
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map