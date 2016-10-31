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
var person_data_service_1 = require('./person-data.service');
var PersonListComponent = (function () {
    function PersonListComponent(_personDataService) {
        this._personDataService = _personDataService;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.persons = this._personDataService.loadPersons();
    };
    PersonListComponent.prototype.onPersonClick = function (person) {
        // TODO: Navigate to PersonDetailComponent
    };
    PersonListComponent = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "\n         <p style=\"font-weight:bold;color:red\">TODO: Implement navigation from PersonList to PersonDetail</p>\n         <ul>\n            <li *ngFor=\"let person of persons\" (click)=\"onPersonClick(person)\">\n               {{person.firstname}}\n             </li>\n           </ul>"
        }), 
        __metadata('design:paramtypes', [person_data_service_1.PersonDataService])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map