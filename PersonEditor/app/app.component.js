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
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.url = "";
        this.router.events.subscribe(function (e) { return _this.onRouterEvent(e); });
    }
    AppComponent.prototype.onRouterEvent = function (event) {
        this.url = event.url;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Person Editor</h1>\n        <ul class=\"nav nav-pills\">\n               <li [class.active]=\"url.startsWith('/person')\"><a routerLink=\"/persons\">All Persons</a></li>\n               <li [class.active]=\"url==='/developers'\">  <a routerLink=\"/developers\" >Developers</a></li>\n            </ul>\n           <router-outlet></router-outlet> "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map