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
var person_data_service_1 = require('./person-data.service');
var PersonListComponent = (function () {
    function PersonListComponent(_personDataService, _router) {
        this._personDataService = _personDataService;
        this._router = _router;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.persons = this._personDataService.loadPersons();
    };
    PersonListComponent.prototype.onPersonClick = function (person) {
        var link = ['/person', person.id];
        this._router.navigate(link);
    };
    PersonListComponent = __decorate([
        core_1.Component({
            selector: 'person-list',
            template: "\n         <ul>\n            <li *ngFor=\"let person of persons\" (click)=\"onPersonClick(person)\">\n               {{person.firstname}}\n             </li>\n           </ul>"
        }), 
        __metadata('design:paramtypes', [person_data_service_1.PersonDataService, router_1.Router])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map