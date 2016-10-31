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
var PersonDetailComponent = (function () {
    function PersonDetailComponent() {
        this.remove = new core_1.EventEmitter();
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        console.log('onInit');
    };
    PersonDetailComponent.prototype.ngOnChanges = function () {
        console.log('onChanges');
    };
    PersonDetailComponent.prototype.ngOnDestroy = function () {
        console.log('onDestroy');
    };
    PersonDetailComponent.prototype.onRemove = function () {
        this.remove.emit(this.person);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "person", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "remove", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'person-detail',
            template: "   \n         <div *ngIf=\"person\">\n\t\t     Selected Person: \n           <div>\n             <label for=\"firstname\" >Firstname: </label>\n             <input id=\"firstname\" type=\"text\" [(ngModel)]=\"person.firstname\"/>\n           </div> \n           <div>\n             <label for=\"lastname\" >Firstname: </label>\n             <input id=\"lastname\" type=\"text\" [(ngModel)]=\"person.lastname\"/>\n           </div>\n           <div>\n             <label for=\"githubaccount\" >Github: </label>\n             <input id=\"githubaccount\" type=\"text\" [(ngModel)]=\"person.githubaccount\"/>\n           </div>\n           \n           <button (click)=\"onRemove()\">Remove</button>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map