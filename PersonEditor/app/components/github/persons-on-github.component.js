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
var http_1 = require('@angular/http');
var person_service_1 = require('./../../services/person.service');
var PersonsOnGithubComponent = (function () {
    function PersonsOnGithubComponent(_personService, _http) {
        this._personService = _personService;
        this._http = _http;
    }
    PersonsOnGithubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._personService.getPersonsWithGithubAccount().subscribe(function (res) { return _this.personList = res; });
    };
    PersonsOnGithubComponent.prototype.onLoadGithubDetails = function (person) {
        var _this = this;
        this.currentUser = person.githubaccount;
        this.loadGithubUser()
            .subscribe(function (user) { _this.myuser = user; }, function (error) { return _this.errorMessage = error; });
        this.loadGithubUserRepos()
            .subscribe(function (repos) { return _this.myrepos = repos; }, function (error) { return _this.errorMessage = error; });
    };
    PersonsOnGithubComponent.prototype.loadGithubUser = function () {
        return this._http.get('https://api.github.com/users/' + this.currentUser)
            .map(function (res) { return res.json(); });
        //  .catch(this.handleError);
    };
    PersonsOnGithubComponent.prototype.loadGithubUserRepos = function () {
        return this._http.get('https://api.github.com/users/' + this.currentUser + '/repos')
            .map(function (res) { return res.json(); });
        //  .catch(this.handleError);
    };
    PersonsOnGithubComponent = __decorate([
        core_1.Component({
            selector: 'persons-on-github',
            template: "\n         <h2>Developers</h2>\n         <ul class=\"list-group\">\n           <li class=\"list-group-item\"\n           [class.active]=\"person.githubaccount===currentUser\"\n            *ngFor=\"let person of personList\"\n             (click)=\"onLoadGithubDetails(person)\">{{person.firstname}} (Github: {{person.githubaccount}})</li>\n         </ul>\n        \n         \n        <div *ngIf=\"myuser\"> \n             <div>\n                <img class=\"img-rounded\" [src]=\"myuser?.avatar_url\" width=\"200\" height=\"200\"/>\n              </div>\n            <div>\n            {{errorMessage}}\n            </div>\n            \n            <table class=\"table-striped\">\n            <thead>\n                <tr>\n                    <th>Repository</th><th>Language</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let repo of myrepos\">\n                    <td>{{repo.name}}</td><td>{{repo.language}}</td>\n                </tr>\n            </tbody>\n            </table>\n         </div>\n     "
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, http_1.Http])
    ], PersonsOnGithubComponent);
    return PersonsOnGithubComponent;
}());
exports.PersonsOnGithubComponent = PersonsOnGithubComponent;
//# sourceMappingURL=persons-on-github.component.js.map