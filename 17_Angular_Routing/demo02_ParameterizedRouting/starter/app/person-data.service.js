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
var PersonDataService = (function () {
    function PersonDataService() {
        this.persons = [
            { id: 1, firstname: 'Silvester', lastname: 'Stallone' },
            { id: 2, firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
            { id: 3, firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
            { id: 4, firstname: 'Bruce', lastname: 'Willis' },
            { id: 5, firstname: 'Lara', lastname: 'Croft' }];
    }
    PersonDataService.prototype.loadPersons = function () {
        return this.persons;
    };
    PersonDataService.prototype.getPersonById = function (id) {
        return this.persons.find(function (p) { return p.id === id; });
    };
    PersonDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PersonDataService);
    return PersonDataService;
}());
exports.PersonDataService = PersonDataService;
//# sourceMappingURL=person-data.service.js.map