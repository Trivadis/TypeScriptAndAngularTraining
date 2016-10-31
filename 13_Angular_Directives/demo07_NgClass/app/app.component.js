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
    }
    AppComponent.prototype.getMyClasses = function () {
        var classes = {
            "isActive": "true",
            "isSelected": "true"
        };
        return classes;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<input type=\"text\" [ngClass]=\"getMyClasses()\" value=\"Hello\" #myInput>\n           <div>\n             Classes set on input: {{myInput.className}}\n           </div>\n            ",
            styles: ["\n  .isActive{\n    background-color:black;\n    color:white;\n  }\n  .isSelected{\n    font-weight:bold;\n  }\n  \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map