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
var person_1 = require('./../../model/person');
var router_1 = require('@angular/router');
var person_service_1 = require('./../../services/person.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(_personService, route) {
        this._personService = _personService;
        this.route = route;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var personId = +params['personid'];
            _this._personService.getPersonById(personId)
                .subscribe(function (res) { return _this.person = res; });
        });
    };
    PersonDetailComponent.prototype.onSave = function () {
        this._personService.savePerson(this.person);
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], PersonDetailComponent.prototype, "person", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'person-detail',
            template: "<h2>PersonDetail: {{person?.firstname}}</h2>\n      <div *ngIf=\"person\">\n         <div>\n           <label for=\"inputFirstname\">Firstname: </label>\n           <input id=\"inputFirstname\" class=\"form-control\" type=\"text\" [(ngModel)]=\"person.firstname\"/>\n         </div>\n            <div>\n           <label for=\"inputGithub\">Github account: </label>\n           <input id=\"inputGithub\" class=\"form-control\" type=\"text\" [(ngModel)]=\"person.githubaccount\"/>\n         </div>\n         <button class=\"btn btn-primary\" (click)=\"onSave()\">Save</button>\n      </div>"
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map