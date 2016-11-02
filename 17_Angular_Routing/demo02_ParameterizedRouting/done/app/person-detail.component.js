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
var common_1 = require('@angular/common');
var person_data_service_1 = require('./person-data.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(_route, _dataService, location) {
        this._route = _route;
        this._dataService = _dataService;
        this.location = location;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (p) {
            var personId = +p['id']; // Convert string to number with JavaScript + operator
            _this.person = _this._dataService.getPersonById(personId);
        });
    };
    PersonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'person-detail',
            template: "   \n        <h1>Person details</h1>\n         <div *ngIf=\"person\">\n\t\t       Person Details: \n           <div>\n             Firstname: {{person.firstname}}\n           </div> \n           <div>\n             Firstname: {{person.lastname}}\n           </div>\n           <div>\n             Github: {{person.githubaccount}}  \n           </div>\n        </div>\n        <button (click)=\"goBack()\">go back</button>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, person_data_service_1.PersonDataService, common_1.Location])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map