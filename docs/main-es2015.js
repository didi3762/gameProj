(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/game/game.component */ "./src/app/comps/game/game.component.ts");
/* harmony import */ var _comps_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/trivyaf/main-trivya/main-trivya.component */ "./src/app/comps/trivyaf/main-trivya/main-trivya.component.ts");
/* harmony import */ var _comps_suduko_sudoko_main_sudoko_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/suduko/sudoko-main/sudoko-main.component */ "./src/app/comps/suduko/sudoko-main/sudoko-main.component.ts");








const routes = [
    { path: 'home', component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home/game-page', component: _comps_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"] },
    { path: 'home/game-page/trivya', component: _comps_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_4__["MainTrivyaComponent"] },
    { path: 'home/suduko', component: _comps_suduko_sudoko_main_sudoko_main_component__WEBPACK_IMPORTED_MODULE_5__["SudokoMainComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/navbar/navbar.component */ "./src/app/comps/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = ["game"];
const _c1 = ["canvas"];
class AppComponent {
    constructor(appService, gameService) {
        this.appService = appService;
        this.gameService = gameService;
        this.showLoader = true;
    }
    // @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    //   this.appService.movePlayer(event, 'keydown');
    //   }
    onKeyupHandler(event) {
        this.appService.movePlayer(event, 'keyup');
    }
    ngOnInit() {
        // this.socket = io("http://localhost:3000");
    }
    ngAfterViewInit() {
        // this.context = this.gameCanvas.nativeElement.getContext("2d");
        // this.socket.on("position", data =>{
        //     this.context.clearRect(0,0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);
        //     this.context.fillRect(data.x,data.y, 20, 20);
        // })
        // setTimeout(() => {
        //   const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        //   this.appService.createPlayGround(canvasEl);
        //   this.subscription = this.appService.getImageLoadEmitter()
        //   .subscribe((item) => {
        //   this.showLoader = false;
        //   this.gameService.startGameLoop();
        // }, 1000);
        // });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.onKeyupHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "my-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0VBQ2dFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyB9XHJcblx0XHRjYW52YXMgeyBiYWNrZ3JvdW5kOiAjZWVlOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87IH0gKi9cclxuXHRcdFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { gameCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['game']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], onKeyupHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_cargame_cargame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/cargame/cargame.component */ "./src/app/comps/cargame/cargame.component.ts");
/* harmony import */ var _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/carusela/carusela.component */ "./src/app/comps/carusela/carusela.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/navbar/navbar.component */ "./src/app/comps/navbar/navbar.component.ts");
/* harmony import */ var _comps_game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/game/game.component */ "./src/app/comps/game/game.component.ts");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/random.directive */ "./src/app/directives/random.directive.ts");
/* harmony import */ var _comps_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/trivyaf/trivya/trivya.component */ "./src/app/comps/trivyaf/trivya/trivya.component.ts");
/* harmony import */ var _comps_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/trivyaf/main-trivya/main-trivya.component */ "./src/app/comps/trivyaf/main-trivya/main-trivya.component.ts");
/* harmony import */ var _comps_trivyaf_heder_trivya_heder_trivya_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/trivyaf/heder-trivya/heder-trivya.component */ "./src/app/comps/trivyaf/heder-trivya/heder-trivya.component.ts");
/* harmony import */ var _comps_suduko_sudoko_main_sudoko_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/suduko/sudoko-main/sudoko-main.component */ "./src/app/comps/suduko/sudoko-main/sudoko-main.component.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _comps_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _comps_cargame_cargame_component__WEBPACK_IMPORTED_MODULE_8__["CargameComponent"],
        _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_9__["CaruselaComponent"],
        _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _comps_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
        _comps_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_14__["TrivyaComponent"],
        _directives_random_directive__WEBPACK_IMPORTED_MODULE_13__["RandomDirective"],
        _comps_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__["MainTrivyaComponent"],
        _comps_trivyaf_heder_trivya_heder_trivya_component__WEBPACK_IMPORTED_MODULE_16__["HederTrivyaComponent"],
        _comps_suduko_sudoko_main_sudoko_main_component__WEBPACK_IMPORTED_MODULE_17__["SudokoMainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _comps_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _comps_cargame_cargame_component__WEBPACK_IMPORTED_MODULE_8__["CargameComponent"],
                    _comps_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_9__["CaruselaComponent"],
                    _comps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _comps_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
                    _comps_trivyaf_trivya_trivya_component__WEBPACK_IMPORTED_MODULE_14__["TrivyaComponent"],
                    _directives_random_directive__WEBPACK_IMPORTED_MODULE_13__["RandomDirective"],
                    _comps_trivyaf_main_trivya_main_trivya_component__WEBPACK_IMPORTED_MODULE_15__["MainTrivyaComponent"],
                    _comps_trivyaf_heder_trivya_heder_trivya_component__WEBPACK_IMPORTED_MODULE_16__["HederTrivyaComponent"],
                    _comps_suduko_sudoko_main_sudoko_main_component__WEBPACK_IMPORTED_MODULE_17__["SudokoMainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"], _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/cargame/cargame.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/cargame/cargame.component.ts ***!
  \****************************************************/
/*! exports provided: CargameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargameComponent", function() { return CargameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CargameComponent {
    constructor() { }
    ngOnInit() {
    }
}
CargameComponent.ɵfac = function CargameComponent_Factory(t) { return new (t || CargameComponent)(); };
CargameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CargameComponent, selectors: [["app-cargame"]], decls: 2, vars: 0, template: function CargameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cargame works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmdhbWUvY2FyZ2FtZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cargame',
                templateUrl: './cargame.component.html',
                styleUrls: ['./cargame.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/carusela/carusela.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/carusela/carusela.component.ts ***!
  \******************************************************/
/*! exports provided: CaruselaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselaComponent", function() { return CaruselaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CaruselaComponent {
    constructor(config) {
        this.images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
        config.interval = 20000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    ngOnInit() {
    }
}
CaruselaComponent.ɵfac = function CaruselaComponent_Factory(t) { return new (t || CaruselaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
CaruselaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaruselaComponent, selectors: [["carusela"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], decls: 69, vars: 0, consts: [["id", "carousel-with-lb", "data-ride", "carousel", 1, "carousel", "slide", "carousel-multi-item", "mr-auto"], [1, "controls-top", "text-center"], ["href", "#carousel-with-lb", "data-slide", "prev", 1, "btn-floating", "btn-secondary"], [1, "fas", "fa-chevron-left"], ["href", "#carousel-with-lb", "data-slide", "next", 1, "btn-floating", "btn-secondary"], [1, "fas", "fa-chevron-right"], [1, "carousel-indicators"], ["data-target", "#carousel-with-lb", "data-slide-to", "0", 1, "active", "secondary-color"], ["data-target", "#carousel-with-lb", "data-slide-to", "1", 1, "secondary-color"], ["data-target", "#carousel-with-lb", "data-slide-to", "2", 1, "secondary-color"], ["role", "listbox", 1, "carousel-inner", "mdb-lightbox"], ["id", "mdb-lightbox-ui"], [1, "carousel-item", "active", "text-center"], [1, "col-md-4", "d-md-inline-block"], ["routerLink", "game-page", "data-size", "1600x1067"], ["src", "assets/img/photo-1535813547-99c456a41d4a.jpg", 1, "img-fluid"], ["routerLink", "suduko", "data-size", "1600x1067"], ["src", "assets/img/photo-1577825294026-50dc375b9119.jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg", 1, "img-fluid"], [1, "carousel-item", "text-center"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg", 1, "img-fluid"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg", "data-size", "1600x1067"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg", 1, "img-fluid"]], template: function CaruselaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["ngb-carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 0;\r\n    padding-top: 55%;\r\n    margin-top: 10px;\r\n     \r\n  }\r\n  \r\n  ngb-carousel[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FydXNlbGEvY2FydXNlbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtLQUNmLGtDQUFrQztFQUNyQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJ1c2VsYS9jYXJ1c2VsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmdiLWNhcm91c2VsIC53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1jYXJvdXNlbCAud3JhcHBlcj5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaruselaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carusela',
                templateUrl: './carusela.component.html',
                styleUrls: ['./carusela.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/game/game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GameComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 3, vars: 0, consts: [[1, "page-header", "header", "container-fluid"], ["routerLink", "trivya", 1, "btn", "btn-outline-secondary", "btn-lg"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-image: url('photo-1548084131-6c908b410378.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n  }\r\n\r\n  .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border:1px solid #6ab446;\r\n    background:#6ab446;\r\n    border-radius: 0;\r\n    color:#fff;\r\n  }\r\n\r\n  .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    border:1px solid #fff;\r\n    background:#fff;\r\n    color:#000;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwREFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9waG90by0xNTQ4MDg0MTMxLTZjOTA4YjQxMDM3OC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM2YWI0NDY7XHJcbiAgICBiYWNrZ3JvdW5kOiM2YWI0NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgLmRlc2NyaXB0aW9uIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carusela_carusela_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carusela/carusela.component */ "./src/app/comps/carusela/carusela.component.ts");




class HomeComponent {
    constructor() {
        //  $('.carousel-3d-controls').mdbCarousel3d(); 
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "view", "align-items-center"], [1, "mask", "rgba-black-light", "align-items-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "carusela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carusela_carusela_component__WEBPACK_IMPORTED_MODULE_2__["CaruselaComponent"]], styles: [".view[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  height: 100vh;\r\n  \r\n  background-color: cornflowerblue;\r\n  background-repeat: no-repeat; \r\n  background-size: cover; \r\n  background-position: center center;\r\n  position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogbWFyZ2luLXRvcDogLTIwcHg7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIC50b3AtbmF2LWNvbGxhcHNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCAxMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMiwgMTIsIDEyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5oMSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxufVxyXG5cclxuaDUge1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5oci1saWdodCB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "show": a0 }; };
class NavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["my-navbar"]], decls: 24, vars: 3, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", 1, "navbar-toggler", 3, "click"], [1, "icon", "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", "show", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "avatar", "dropdown"], [1, "navbar-nav", "flex-column"], ["type", "button", "data-toggle", "dropdown", 1, "pp", "nav-link", "dropdown-toggle", "waves-light"], ["src", "assets/img/TL18TV7R6-UL1DXHD6Z-gdf2e191070b-512.png", "alt", "placeholder", 1, "img-fluid", "rounded-circle", "z-depth-0"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "dropdown", "dropdown-primary"], ["href", "home/game-page", 1, "dropdown-item", "waves-light"], ["href", "#", 1, "dropdown-item", "waves-light"], [1, "navbar-text"], [1, "fas", "fa-trophy"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05E8\u05D0\u05E9\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05D4\u05E8\u05E9\u05DE\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u05D4\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05E9\u05DC\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navbarOpen));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    \r\n    margin: 0;\r\n}\r\n\r\n.navbar-text[_ngcontent-%COMP%]{\r\n    color: rgb(255, 196, 0);\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.pp[_ngcontent-%COMP%]{\r\n    \r\n    height: 60px;\r\n    width: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHB7XHJcbiAgICBcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/suduko/sudoko-main/sudoko-main.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/suduko/sudoko-main/sudoko-main.component.ts ***!
  \*******************************************************************/
/*! exports provided: SudokoMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokoMainComponent", function() { return SudokoMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SudokoMainComponent_tbody_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r3);
} }
function SudokoMainComponent_tbody_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SudokoMainComponent_tbody_1_td_2_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sudoku_long);
} }
class SudokoMainComponent {
    constructor() {
        this.sudoku_long = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    ngOnInit() {
        this.sudokoRand();
    }
    sudokoRand() {
        for (let i = 0; i < this.sudoku_long.length; i++) {
            let rand = Math.floor(Math.random() * 9);
            if (rand === 0) {
                this.sudoku_long[i] = " ";
            }
            else {
                this.sudoku_long[i] = rand;
            }
        }
        ;
    }
}
SudokoMainComponent.ɵfac = function SudokoMainComponent_Factory(t) { return new (t || SudokoMainComponent)(); };
SudokoMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokoMainComponent, selectors: [["app-sudoko-main"]], decls: 2, vars: 1, consts: [[1, "table", "table-bordered", "table-primary"], [4, "ngFor", "ngForOf"]], template: function SudokoMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SudokoMainComponent_tbody_1_Template, 3, 1, "tbody", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sudoku_long);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3N1ZHVrby9zdWRva28tbWFpbi9zdWRva28tbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokoMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sudoko-main',
                templateUrl: './sudoko-main.component.html',
                styleUrls: ['./sudoko-main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/trivyaf/heder-trivya/heder-trivya.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comps/trivyaf/heder-trivya/heder-trivya.component.ts ***!
  \**********************************************************************/
/*! exports provided: HederTrivyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HederTrivyaComponent", function() { return HederTrivyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trivya-svc.service */ "./src/app/services/trivya-svc.service.ts");



class HederTrivyaComponent {
    constructor(wordsSV) {
        this.wordsSV = wordsSV;
        this.wordEng = "";
    }
    ngOnInit() {
    }
}
HederTrivyaComponent.ɵfac = function HederTrivyaComponent_Factory(t) { return new (t || HederTrivyaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
HederTrivyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HederTrivyaComponent, selectors: [["heder-trivya"]], decls: 9, vars: 1, consts: [["id", "design"], ["id", "rotatedBorder"], ["id", "header"], ["id", "aBorder"], ["id", "sBorder"], ["id", "circle"], ["id", "sum"]], template: function HederTrivyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wordsSV.wordEng);
    } }, styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 300px; height: 50px;\r\n    margin: auto; margin-top: 100px; \r\n    display: flex;   \r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n\r\n    \r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 5px gray solid;\r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: brown;\r\n}\r\n\r\n#aBorder[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    position: relative; width: 30px; height: 30px;\r\n    margin: auto; margin-top: 10px; \r\n    text-align: center; \r\n    justify-content: center;\r\n    \r\n}\r\n\r\n#sBorder[_ngcontent-%COMP%]{\r\n\r\n    margin: auto;\r\n    height: 100%; \r\n    width: 100%;\r\n    box-sizing: border-box; \r\n    border: 2px green solid;\r\n    border-radius: 50px;\r\n     box-shadow: 0 0 10px #4feb1f, inset 10px 10px 20px #6aeb1f; \r\n    \r\n}\r\n\r\n#circle[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n#sum[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdHJpdnlhZi9oZWRlci10cml2eWEvaGVkZXItdHJpdnlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsWUFBWTtJQUM5QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTs7SUFFYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9EQUFvRDtJQUNwRCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVk7SUFDN0MsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjs7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtLQUNsQiwwREFBMEQ7O0FBRS9EOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RyaXZ5YWYvaGVkZXItdHJpdnlhL2hlZGVyLXRyaXZ5YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rlc2lnbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAzMDBweDsgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvOyBtYXJnaW4tdG9wOiAxMDBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxyXG59XHJcblxyXG4jcm90YXRlZEJvcmRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBib3JkZXI6IDVweCBncmF5IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ViMzExZiwgaW5zZXQgMCAwIDIwcHggI2ViMzExZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jaGVhZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn1cclxuI2FCb3JkZXJ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4jc0JvcmRlcntcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgIGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNGZlYjFmLCBpbnNldCAxMHB4IDEwcHggMjBweCAjNmFlYjFmOyBcclxuICAgIFxyXG59IFxyXG5cclxuI2NpcmNsZXtcclxuXHJcbn1cclxuXHJcbiNzdW17XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HederTrivyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'heder-trivya',
                templateUrl: './heder-trivya.component.html',
                styleUrls: ['./heder-trivya.component.css']
            }]
    }], function () { return [{ type: src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/trivyaf/main-trivya/main-trivya.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/comps/trivyaf/main-trivya/main-trivya.component.ts ***!
  \********************************************************************/
/*! exports provided: MainTrivyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTrivyaComponent", function() { return MainTrivyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _heder_trivya_heder_trivya_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../heder-trivya/heder-trivya.component */ "./src/app/comps/trivyaf/heder-trivya/heder-trivya.component.ts");
/* harmony import */ var _trivya_trivya_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trivya/trivya.component */ "./src/app/comps/trivyaf/trivya/trivya.component.ts");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/random.directive */ "./src/app/directives/random.directive.ts");





class MainTrivyaComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainTrivyaComponent.ɵfac = function MainTrivyaComponent_Factory(t) { return new (t || MainTrivyaComponent)(); };
MainTrivyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainTrivyaComponent, selectors: [["app-main-trivya"]], decls: 4, vars: 0, consts: [[1, "home"], [1, "board"], ["Random", ""]], template: function MainTrivyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "heder-trivya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "board", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_heder_trivya_heder_trivya_component__WEBPACK_IMPORTED_MODULE_1__["HederTrivyaComponent"], _trivya_trivya_component__WEBPACK_IMPORTED_MODULE_2__["TrivyaComponent"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__["RandomDirective"]], styles: [".home[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.board[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdHJpdnlhZi9tYWluLXRyaXZ5YS9tYWluLXRyaXZ5YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy90cml2eWFmL21haW4tdHJpdnlhL21haW4tdHJpdnlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm9hcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainTrivyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-trivya',
                templateUrl: './main-trivya.component.html',
                styleUrls: ['./main-trivya.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/trivyaf/trivya/trivya.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/trivyaf/trivya/trivya.component.ts ***!
  \**********************************************************/
/*! exports provided: TrivyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivyaComponent", function() { return TrivyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/trivya-svc.service */ "./src/app/services/trivya-svc.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/random.directive */ "./src/app/directives/random.directive.ts");





function TrivyaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getRand", function TrivyaComponent_div_1_Template_div_getRand_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.wordsSVC.addRand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wordHeb", x_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r1, " ");
} }
class TrivyaComponent {
    constructor(wordsSVC) {
        this.wordsSVC = wordsSVC;
        this.wordRand = '';
    }
    ngOnInit() {
    }
}
TrivyaComponent.ɵfac = function TrivyaComponent_Factory(t) { return new (t || TrivyaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
TrivyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrivyaComponent, selectors: [["board"]], inputs: { wordRand: "wordRand", arrLange: "arrLange" }, decls: 2, vars: 1, consts: [["id", "design"], ["id", "rotatedBorder", "Random", "", 3, "wordHeb", "getRand", 4, "ngFor", "ngForOf"], ["id", "rotatedBorder", "Random", "", 3, "wordHeb", "getRand"], ["id", "word"]], template: function TrivyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrivyaComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wordsSVC.wordsArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_random_directive__WEBPACK_IMPORTED_MODULE_3__["RandomDirective"]], styles: ["#design[_ngcontent-%COMP%] {\r\n    position: relative; width: 100%; height: 150px;\r\n    margin: auto; margin-top: 100px; \r\n    text-align: center; \r\n    display: flex; \r\n    justify-content: space-evenly;\r\n\r\n}\r\n\r\n#rotatedBorder[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 100%; \r\n    width: 100%;\r\n    margin: auto;\r\n    box-sizing: border-box; \r\n    border: 15px violet solid;\r\n    \r\n    box-shadow: 0 0 10px #eb311f, inset 0 0 20px #eb311f;\r\n    display: flex;\r\n}\r\n\r\n#word[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdHJpdnlhZi90cml2eWEvdHJpdnlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsYUFBYTtJQUM5QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixvREFBb0Q7SUFDcEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy90cml2eWFmL3RyaXZ5YS90cml2eWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXNpZ24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bzsgbWFyZ2luLXRvcDogMTAwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG59XHJcblxyXG4jcm90YXRlZEJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBib3JkZXI6IDE1cHggdmlvbGV0IHNvbGlkO1xyXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ViMzExZiwgaW5zZXQgMCAwIDIwcHggI2ViMzExZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiN3b3Jke1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrivyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'board',
                templateUrl: './trivya.component.html',
                styleUrls: ['./trivya.component.css']
            }]
    }], function () { return [{ type: src_app_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, { wordRand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrLange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/confing/confing.ts":
/*!************************************!*\
  !*** ./src/app/confing/confing.ts ***!
  \************************************/
/*! exports provided: playGroundHeight, playGroundWidth, frameNumber, spritePath, playerCarSpeed, playerCar, vehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playGroundHeight", function() { return playGroundHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playGroundWidth", function() { return playGroundWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameNumber", function() { return frameNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spritePath", function() { return spritePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCarSpeed", function() { return playerCarSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCar", function() { return playerCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicles", function() { return vehicles; });
const playGroundHeight = window.innerHeight;
const playGroundWidth = 500;
const frameNumber = 0;
const spritePath = '../assets/img/sprites.png';
const playerCarSpeed = 5;
const playerCar = {
    sX: 410,
    sY: 265,
    sWidth: 64,
    sHeight: 135,
    width: 40,
    height: 90,
};
const vehicles = [
    {
        sX: 35,
        sY: 265,
        sWidth: 68,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 100,
        sY: 269,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 161,
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 225,
        sY: 268,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 287,
        sY: 271,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 348,
        sY: 270,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 476,
        sY: 265,
        sWidth: 62,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 543,
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 610,
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 605,
        sY: 0,
        sWidth: 80,
        sHeight: 160,
        width: 60,
        height: 120,
    }, {
        sX: 460,
        sY: 0,
        sWidth: 75,
        sHeight: 160,
        width: 60,
        height: 120,
    }, {
        sX: 531,
        sY: 0,
        sWidth: 70,
        sHeight: 160,
        width: 45,
        height: 140,
    }, {
        sX: 368,
        sY: 0,
        sWidth: 90,
        sHeight: 220,
        width: 60,
        height: 140,
    }, {
        sX: 190,
        sY: 0,
        sWidth: 70,
        sHeight: 260,
        width: 55,
        height: 200,
    }, {
        sX: 285,
        sY: 0,
        sWidth: 70,
        sHeight: 260,
        width: 55,
        height: 200,
    }
];


/***/ }),

/***/ "./src/app/directives/random.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/random.directive.ts ***!
  \************************************************/
/*! exports provided: RandomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomDirective", function() { return RandomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/trivya-svc.service */ "./src/app/services/trivya-svc.service.ts");



class RandomDirective {
    constructor(elRef, wordsSV) {
        this.elRef = elRef;
        this.wordsSV = wordsSV;
        this.sum = 0;
        this.HebWords = [];
        this.englishWords = [];
        this.WordsArr = [];
        this.wordHeb = '';
        this.getwordHeb = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getHebWords = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getenglishWords = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getWord = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRandInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getRand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randArr = [1, 2, 3, 4, 5, 6, 7];
        this.el = elRef.nativeElement;
    }
    rnd() {
        console.log('clicked');
        this.rand();
        this.getWord.emit(this.wordHeb);
        this.getRand.emit(this.randArr);
    }
    rand() {
        for (let i = 0; i < this.randArr.length; i++) {
            let rand = Math.floor(Math.random() * Math.floor(40));
            this.randArr[i] = rand;
        }
        let rand4 = Math.floor(Math.random() * Math.floor(4));
        this.randArr[5] = rand4;
        console.log(this.wordHeb);
        let HebIndex = this.wordsSV.HebWords.indexOf(this.wordHeb);
        this.randArr[6] = HebIndex;
    }
    ngOnInit() {
        console.log("init", this.wordHeb);
        this.wordsSV.wordHeb = this.wordHeb;
    }
}
RandomDirective.ɵfac = function RandomDirective_Factory(t) { return new (t || RandomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"])); };
RandomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RandomDirective, selectors: [["", "Random", ""]], hostBindings: function RandomDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomDirective_click_HostBindingHandler() { return ctx.rnd(); });
    } }, inputs: { HebWords: "HebWords", englishWords: "englishWords", WordsArr: "WordsArr", wordHeb: "wordHeb", arrLange: "arrLange" }, outputs: { getwordHeb: "getwordHeb", getHebWords: "getHebWords", getenglishWords: "getenglishWords", getWord: "getWord", getRandInit: "getRandInit", getRand: "getRand" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[Random]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_trivya_svc_service__WEBPACK_IMPORTED_MODULE_1__["TrivyaSvcService"] }]; }, { HebWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], englishWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], WordsArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wordHeb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrLange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], getwordHeb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getHebWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getenglishWords: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getRandInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getRand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.service */ "./src/app/services/game.service.ts");



class AppService {
    constructor(gameService) {
        this.gameService = gameService;
        this.isImageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    createPlayGround(canvasElement) {
        this.gameService.loadAssets(canvasElement).then((image) => {
            this.isImageLoaded.emit();
        });
    }
    getImageLoadEmitter() {
        return this.isImageLoaded;
    }
    movePlayer(event, type) {
        if (type === 'keydown') {
            if (event.keyCode === 37) {
                this.gameService.moveLeft = true;
                this.gameService.moveUP = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 39) {
                this.gameService.moveRight = true;
                this.gameService.moveLeft = false;
                this.gameService.moveUP = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 38) {
                this.gameService.moveUP = true;
                this.gameService.moveLeft = false;
                this.gameService.moveRight = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 40) {
                this.gameService.moveDown = true;
                this.gameService.moveLeft = false;
                this.gameService.moveRight = false;
                this.gameService.moveUP = false;
            }
        }
        else if (type === 'keyup') {
            this.gameService.moveDown = false;
            this.gameService.moveLeft = false;
            this.gameService.moveRight = false;
            this.gameService.moveUP = false;
        }
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confing_confing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../confing/confing */ "./src/app/confing/confing.ts");



class GameService {
    constructor() {
        this.width = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"];
        this.height = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"];
        this.frameNumber = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["frameNumber"];
        this.player = {
            x: _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"] / 2 - _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width,
            y: _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"] - (_confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height / 2),
        };
        this.obstacles = [];
        this.image = null;
        this.gameLoop = null;
        this.moveUP = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
    }
    loadAssets(canvasElement) {
        this.context = canvasElement.getContext('2d');
        canvasElement.width = this.width;
        canvasElement.height = this.height;
        return new Promise((resolve, reject) => {
            this.image = new Image();
            this.image.src = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["spritePath"];
            this.image.width = 58;
            this.image.height = 128;
            resolve();
        });
    }
    suffleProperties() {
        this.frameNumber += 1;
    }
    cleanGround() {
        this.context.clearRect(0, 0, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"], _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"]);
    }
    animationFrame(n) {
        if ((this.frameNumber / n) % 1 === 0) {
            return true;
        }
        return false;
    }
    getSingleObstacle() {
        const context = this.context;
        const image = this.image;
        const randomVehicle = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["vehicles"][Math.floor(Math.random() * _confing_confing__WEBPACK_IMPORTED_MODULE_1__["vehicles"].length)];
        this.obstacles.push(new function () {
            this.x = Math.floor(Math.random() * 450) + 0,
                this.y = Math.floor(Math.random() * -15),
                this.width = randomVehicle.width;
            this.height = randomVehicle.height;
            this.update = () => {
                context.drawImage(image, randomVehicle.sX, randomVehicle.sY, randomVehicle.sWidth, randomVehicle.sHeight, this.x, this.y, randomVehicle.width, randomVehicle.height);
            };
        });
    }
    createObstacles() {
        if (this.frameNumber === 1 || this.animationFrame(100)) {
            if (this.obstacles.length > 20) {
                this.obstacles.splice(0, 5);
            }
            console.log(this.getSingleObstacle());
        }
    }
    detectCrash(obstacle) {
        const componentLeftSide = obstacle.x;
        const componentRightSide = obstacle.x + obstacle.width;
        const componentTop = obstacle.y;
        const componentBottom = obstacle.y + obstacle.height;
        const carRightSide = this.player.x + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width;
        const carLeftSide = this.player.x;
        const carTop = this.player.y;
        const carBottom = this.player.y + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height;
        if (((carRightSide > componentLeftSide) && (carTop < componentBottom)) && ((carLeftSide < componentRightSide) && (carTop < componentBottom)) && ((carRightSide > componentLeftSide) && (carBottom > componentTop)) && ((carLeftSide < componentRightSide) && (carBottom > componentTop))) {
            clearInterval(this.gameLoop);
            alert('Game Over');
            window.location.reload();
        }
    }
    moveObstacles() {
        this.obstacles.forEach((element, index) => {
            element.y += 3;
            element.update();
            this.detectCrash(element);
            console.log(this.height);
            if (element.y > this.height) {
                this.obstacles.splice(index, 1);
            }
        });
    }
    startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.suffleProperties();
            this.cleanGround();
            this.createObstacles();
            this.moveObstacles();
            this.createPlayer();
        }, 10);
    }
    createPlayer() {
        if (this.moveUP) {
            if (this.player.y === 0) {
                this.player.y = 0;
            }
            else {
                this.player.y -= _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCarSpeed"];
            }
        }
        else if (this.moveDown) {
            if (this.player.y + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height === _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"] ||
                this.player.y + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height > _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"]) {
                this.player.y = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"] - _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height;
            }
            else {
                this.player.y += _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCarSpeed"];
            }
        }
        else if (this.moveLeft) {
            if (this.player.x === 0 || this.player.x < 0) {
                this.player.x = 0;
            }
            else {
                this.player.x -= _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCarSpeed"];
            }
        }
        else if (this.moveRight) {
            if (this.player.x + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sWidth === _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"] ||
                this.player.x + _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sWidth > _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"]) {
                this.player.x = _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"] - _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width;
            }
            else {
                this.player.x += _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCarSpeed"];
            }
        }
        this.context.drawImage(this.image, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sX, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sY, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sWidth, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].sHeight, this.player.x, this.player.y, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width, _confing_confing__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height);
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/trivya-svc.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/trivya-svc.service.ts ***!
  \************************************************/
/*! exports provided: TrivyaSvcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivyaSvcService", function() { return TrivyaSvcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class TrivyaSvcService {
    constructor(myHttp) {
        this.myHttp = myHttp;
        this.urlsJeson = {
            jsonA: "https://raw.githubusercontent.com/didi3762/ajax/master/ajax4.json",
        };
        this.HebWords = [];
        this.englishWords = [];
        this.wordsArr = [];
        this.randArr = [1, 2, 3, 4, 5, 6];
        console.log(this.wordsArr, this.randArr, this.HebWords);
        this.httpGet(this.urlsJeson.jsonA)
            .subscribe(result => {
            this.fullResponse = result;
            this.words = this.fullResponse.words;
            this.HebWords = this.words[0].HebWords;
            this.englishWords = this.words[0].englishWords;
            this.wordsSum = this.fullResponse.persons[0].sumDoct;
            this.rand();
            this.addRand(this.randArr);
        });
    }
    httpGet(url) {
        return this.myHttp.get(url);
    }
    rand() {
        for (let i = 0; i < this.randArr.length; i++) {
            let rand = Math.floor(Math.random() * Math.floor(40));
            this.randArr[i] = rand;
        }
        let rand4 = Math.floor(Math.random() * Math.floor(4));
        this.randArr[5] = rand4;
    }
    addRand(event) {
        let engIndex = this.englishWords.indexOf(this.wordEng);
        if (this.wordEng == '' || this.wordEng == null) {
            console.log(this.sum);
            this.sum = 0;
        }
        else if (event[6] == engIndex) {
            this.sum++;
            this.wordsSum[event[6]]++;
            console.log(this.sum);
        }
        else {
            console.log(this.sum);
            this.sum--;
        }
        this.wordEng = this.englishWords[event[0]];
        this.wordsArr[0] = this.HebWords[event[1]];
        this.wordsArr[1] = this.HebWords[event[2]];
        this.wordsArr[2] = this.HebWords[event[3]];
        this.wordsArr[3] = this.HebWords[event[4]];
        this.wordsArr[event[5]] = this.HebWords[event[0]];
        console.log(this.wordsSum);
        this.resTex = this.sum.toString();
    }
}
TrivyaSvcService.ɵfac = function TrivyaSvcService_Factory(t) { return new (t || TrivyaSvcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TrivyaSvcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrivyaSvcService, factory: TrivyaSvcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrivyaSvcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu\Desktop\nodeJs\responsive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map