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
        this.fullname = "Lara Croft";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [".active{\n     background-color:green;\n  }"],
            template: "<h1>Details of {{fullname | uppercase}}</h1>\n            <div>Type in \"Thomas\" and it sets the active-class on the input-element (so it gets green)</div>\n            <input [class.active]=\"fullname==='Thomas'\" type=\"text\" [(ngModel)]=\"fullname\" #myInput required>\n            <div>Classes set on input-element: {{myInput.className}}</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map