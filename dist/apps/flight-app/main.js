(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/flight-api/src/index.ts":
/*!******************************************************************************************************!*\
  !*** D:/bak/beratung/angular2/workshops_advanced/advanced-nx-workspace/libs/flight-api/src/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: FlightApiModule, FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_flight_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/flight-api.module */ "../../libs/flight-api/src/lib/flight-api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightApiModule", function() { return _lib_flight_api_module__WEBPACK_IMPORTED_MODULE_0__["FlightApiModule"]; });

/* harmony import */ var _lib_services_flight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/flight.service */ "../../libs/flight-api/src/lib/services/flight.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return _lib_services_flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"]; });





/***/ }),

/***/ "../../libs/flight-api/src/lib/flight-api.module.ts":
/*!**********************************************************************************************************************!*\
  !*** D:/bak/beratung/angular2/workshops_advanced/advanced-nx-workspace/libs/flight-api/src/lib/flight-api.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FlightApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightApiModule", function() { return FlightApiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/flight.service */ "../../libs/flight-api/src/lib/services/flight.service.ts");




var FlightApiModule = /** @class */ (function () {
    function FlightApiModule() {
    }
    FlightApiModule.forRoot = function () {
        return {
            ngModule: FlightApiModule,
            providers: [
                _services_flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"]
            ]
        };
    };
    FlightApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlightApiModule });
    FlightApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FlightApiModule_Factory(t) { return new (t || FlightApiModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ]] });
    return FlightApiModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlightApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlightApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/flight-api/src/lib/services/flight.service.ts":
/*!****************************************************************************************************************************!*\
  !*** D:/bak/beratung/angular2/workshops_advanced/advanced-nx-workspace/libs/flight-api/src/lib/services/flight.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");




var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.flights = [];
        this.baseUrl = "http://www.angular.at/api";
        this.reqDelay = 1000;
    }
    FlightService.prototype.load = function (from, to, urgent) {
        var _this = this;
        var o = this.find(from, to, urgent)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) { return console.error('Error loading flights', err); });
    };
    FlightService.prototype.find = function (from, to, urgent) {
        // For offline access
        // let url = '/assets/data/data.json';
        if (urgent === void 0) { urgent = false; }
        // For online access
        var url = [this.baseUrl, 'flight'].join('/');
        if (urgent) {
            url = [this.baseUrl, 'error?code=403'].join('/');
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('from', from)
            .set('to', to);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Accept', 'application/json');
        var reqObj = { params: params, headers: headers };
        return this.http.get(url, reqObj);
        // return of(flights).pipe(delay(this.reqDelay))
    };
    FlightService.prototype.findById = function (id) {
        var reqObj = { params: null };
        reqObj.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', id);
        var url = [this.baseUrl, 'flight'].join('/');
        return this.http.get(url, reqObj);
        // return of(flights[0]).pipe(delay(this.reqDelay))
    };
    FlightService.prototype.save = function (flight) {
        var url = [this.baseUrl, 'flight'].join('/');
        return this.http.post(url, flight);
    };
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0];
        var oldDate = new Date(oldFlight.date);
        // Mutable
        oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE);
        oldFlight.date = oldDate.toISOString();
    };
    FlightService.ɵfac = function FlightService_Factory(t) { return new (t || FlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    FlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FlightService, factory: FlightService.ɵfac });
    return FlightService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["flight-app"]], decls: 8, vars: 0, consts: [[1, "wrapper"], ["data-background-color", "white", "data-active-color", "danger", 1, "sidebar"], [1, "main-panel"], [1, "content"], ["name", "aux"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sidebar-cmp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "navbar-cmp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".loading-indicator[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: 0.3;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n\r\n  position: relative;\r\n  margin: 100px auto;\r\n}\r\n\r\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background-color: #FFF;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n  animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: -1.0s;\r\n  animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n  0%, 100% {\r\n    -webkit-transform: scale(0.0)\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.0)\r\n  }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n  0%, 100% {\r\n    transform: scale(0.0);\r\n    -webkit-transform: scale(0.0);\r\n  }\r\n  50% {\r\n    transform: scale(1.0);\r\n    -webkit-transform: scale(1.0);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZmxpZ2h0LWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPOztFQUVQLHNEQUFzRDtFQUN0RCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQiw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJhcHBzL2ZsaWdodC1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG59XHJcblxyXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZG91YmxlLWJvdW5jZTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMClcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flight-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flight_booking_flight_cancelling_flight_cancelling_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-booking/flight-cancelling/flight-cancelling.module */ "./src/app/flight-booking/flight-cancelling/flight-cancelling.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @flight-workspace/flight-api */ "../../libs/flight-api/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basket/basket.component */ "./src/app/basket/basket.component.ts");
/* harmony import */ var _flight_booking_flight_booking_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flight-booking/flight-booking.module */ "./src/app/flight-booking/flight-booking.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _libs_flight_api_src_lib_flight_api_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../libs/flight-api/src/lib/flight-api.module */ "../../libs/flight-api/src/lib/flight-api.module.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _flight_booking_flight_booking_module__WEBPACK_IMPORTED_MODULE_11__["FlightBookingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _flight_booking_flight_cancelling_flight_cancelling_module__WEBPACK_IMPORTED_MODULE_1__["FlightCancellingModule"],
                _flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_7__["FlightApiModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_app_routes__WEBPACK_IMPORTED_MODULE_9__["APP_ROUTES"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _app_routes__WEBPACK_IMPORTED_MODULE_9__["APP_EXTRA_OPTIONS"])),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _flight_booking_flight_booking_module__WEBPACK_IMPORTED_MODULE_11__["FlightBookingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _flight_booking_flight_cancelling_flight_cancelling_module__WEBPACK_IMPORTED_MODULE_1__["FlightCancellingModule"], _libs_flight_api_src_lib_flight_api_module__WEBPACK_IMPORTED_MODULE_16__["FlightApiModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _flight_booking_flight_booking_module__WEBPACK_IMPORTED_MODULE_11__["FlightBookingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _flight_booking_flight_cancelling_flight_cancelling_module__WEBPACK_IMPORTED_MODULE_1__["FlightCancellingModule"],
                    _flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_7__["FlightApiModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_app_routes__WEBPACK_IMPORTED_MODULE_9__["APP_ROUTES"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _app_routes__WEBPACK_IMPORTED_MODULE_9__["APP_EXTRA_OPTIONS"])),
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES, APP_EXTRA_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_EXTRA_OPTIONS", function() { return APP_EXTRA_OPTIONS; });
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket/basket.component */ "./src/app/basket/basket.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'basket',
        component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_0__["BasketComponent"],
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var APP_EXTRA_OPTIONS = {};


/***/ }),

/***/ "./src/app/basket/basket.component.ts":
/*!********************************************!*\
  !*** ./src/app/basket/basket.component.ts ***!
  \********************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var _c0 = function () { return { aux: null }; };
var _c1 = function (a0) { return { outlets: a0 }; };
var _c2 = function (a1) { return ["/", a1]; };
var BasketComponent = /** @class */ (function () {
    function BasketComponent() {
    }
    BasketComponent.ɵfac = function BasketComponent_Factory(t) { return new (t || BasketComponent)(); };
    BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketComponent, selectors: [["basket"]], decls: 15, vars: 6, consts: [[1, "gray-bg", 2, "z-index", "99"], [1, "flight-history", 2, "z-index", "100"], [1, "flight-history-inside", "card"], [3, "routerLink"], [1, "list-group"], [1, "list-group-item"]], template: function BasketComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Basket [");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "]");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hamburg - Graz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Graz - Hamburg");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0))));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".gray-bg[_ngcontent-%COMP%] {\r\n  opacity: 0.4;\r\n  background-color: black;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n}\r\n\r\n.flight-history[_ngcontent-%COMP%] {\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n}\r\n\r\n.flight-history-inside[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 100px auto;\r\n  width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZmxpZ2h0LWFwcC9zcmMvYXBwL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcHMvZmxpZ2h0LWFwcC9zcmMvYXBwL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5LWJnIHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5mbGlnaHQtaGlzdG9yeSB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5mbGlnaHQtaGlzdG9yeS1pbnNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuIl19 */"] });
    return BasketComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'basket',
                templateUrl: './basket.component.html',
                styleUrls: ['./basket.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-booking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/flight-booking/flight-booking.component.ts ***!
  \************************************************************/
/*! exports provided: FlightBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightBookingComponent", function() { return FlightBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var FlightBookingComponent = /** @class */ (function () {
    function FlightBookingComponent() {
    }
    FlightBookingComponent.prototype.ngOnInit = function () {
    };
    FlightBookingComponent.ɵfac = function FlightBookingComponent_Factory(t) { return new (t || FlightBookingComponent)(); };
    FlightBookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightBookingComponent, selectors: [["flight-booking"]], decls: 8, vars: 0, consts: [[1, "card"], [1, "content"], ["routerLink", "./flight-search"], ["routerLink", "./passenger-search"]], template: function FlightBookingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flight Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " | ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Passenger Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return FlightBookingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightBookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flight-booking',
                templateUrl: './flight-booking.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-booking.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/flight-booking/flight-booking.module.ts ***!
  \*********************************************************/
/*! exports provided: FlightBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightBookingModule", function() { return FlightBookingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _flight_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight-booking.component */ "./src/app/flight-booking/flight-booking.component.ts");
/* harmony import */ var _flight_booking_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flight-booking.routes */ "./src/app/flight-booking/flight-booking.routes.ts");
/* harmony import */ var _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flight-card/flight-card.component */ "./src/app/flight-booking/flight-card/flight-card.component.ts");
/* harmony import */ var _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flight-edit/flight-edit.component */ "./src/app/flight-booking/flight-edit/flight-edit.component.ts");
/* harmony import */ var _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flight-search/flight-search.component */ "./src/app/flight-booking/flight-search/flight-search.component.ts");
/* harmony import */ var _passenger_search_passenger_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passenger-search/passenger-search.component */ "./src/app/flight-booking/passenger-search/passenger-search.component.ts");














var FlightBookingModule = /** @class */ (function () {
    function FlightBookingModule() {
    }
    FlightBookingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlightBookingModule });
    FlightBookingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FlightBookingModule_Factory(t) { return new (t || FlightBookingModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_flight_booking_routes__WEBPACK_IMPORTED_MODULE_6__["FLIGHT_BOOKING_ROUTES"])
            ]] });
    return FlightBookingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlightBookingModule, { declarations: [_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__["FlightSearchComponent"],
        _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_7__["FlightCardComponent"],
        _passenger_search_passenger_search_component__WEBPACK_IMPORTED_MODULE_10__["PassengerSearchComponent"],
        _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_8__["FlightEditComponent"],
        _flight_booking_component__WEBPACK_IMPORTED_MODULE_5__["FlightBookingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__["FlightSearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlightBookingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forChild(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_flight_booking_routes__WEBPACK_IMPORTED_MODULE_6__["FLIGHT_BOOKING_ROUTES"])
                ],
                declarations: [
                    _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__["FlightSearchComponent"],
                    _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_7__["FlightCardComponent"],
                    _passenger_search_passenger_search_component__WEBPACK_IMPORTED_MODULE_10__["PassengerSearchComponent"],
                    _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_8__["FlightEditComponent"],
                    _flight_booking_component__WEBPACK_IMPORTED_MODULE_5__["FlightBookingComponent"]
                ],
                providers: [],
                exports: [
                    _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__["FlightSearchComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-booking.routes.ts":
/*!*********************************************************!*\
  !*** ./src/app/flight-booking/flight-booking.routes.ts ***!
  \*********************************************************/
/*! exports provided: FLIGHT_BOOKING_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_BOOKING_ROUTES", function() { return FLIGHT_BOOKING_ROUTES; });
/* harmony import */ var _flight_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flight-booking.component */ "./src/app/flight-booking/flight-booking.component.ts");
/* harmony import */ var _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-edit/flight-edit.component */ "./src/app/flight-booking/flight-edit/flight-edit.component.ts");
/* harmony import */ var _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight-search/flight-search.component */ "./src/app/flight-booking/flight-search/flight-search.component.ts");
/* harmony import */ var _passenger_search_passenger_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passenger-search/passenger-search.component */ "./src/app/flight-booking/passenger-search/passenger-search.component.ts");




var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'flight-booking',
        component: _flight_booking_component__WEBPACK_IMPORTED_MODULE_0__["FlightBookingComponent"],
        children: [
            {
                path: 'flight-search',
                component: _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_2__["FlightSearchComponent"]
            },
            {
                path: 'passenger-search',
                component: _passenger_search_passenger_search_component__WEBPACK_IMPORTED_MODULE_3__["PassengerSearchComponent"]
            },
            {
                path: 'flight-edit/:id',
                component: _flight_edit_flight_edit_component__WEBPACK_IMPORTED_MODULE_1__["FlightEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/flight-booking/flight-cancelling/default-flight-cancelling.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/flight-booking/flight-cancelling/default-flight-cancelling.service.ts ***!
  \***************************************************************************************/
/*! exports provided: DefaultFlightCancellingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFlightCancellingService", function() { return DefaultFlightCancellingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DefaultFlightCancellingService = /** @class */ (function () {
    function DefaultFlightCancellingService() {
    }
    DefaultFlightCancellingService.prototype.show = function (flightId) {
        alert('not implemented yet!');
    };
    DefaultFlightCancellingService.ɵfac = function DefaultFlightCancellingService_Factory(t) { return new (t || DefaultFlightCancellingService)(); };
    DefaultFlightCancellingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultFlightCancellingService, factory: DefaultFlightCancellingService.ɵfac });
    return DefaultFlightCancellingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlightCancellingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-cancelling/flight-cancelling.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/flight-booking/flight-cancelling/flight-cancelling.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FlightCancellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightCancellingComponent", function() { return FlightCancellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flight-cancelling.service */ "./src/app/flight-booking/flight-cancelling/flight-cancelling.service.ts");




var FlightCancellingComponent = /** @class */ (function () {
    function FlightCancellingComponent(service) {
        this.service = service;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FlightCancellingComponent.prototype.ngOnInit = function () {
        console.debug('init');
    };
    FlightCancellingComponent.prototype.closeHandler = function () {
        console.debug('remove');
        this.closed.next();
    };
    FlightCancellingComponent.ɵfac = function FlightCancellingComponent_Factory(t) { return new (t || FlightCancellingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__["FlightCancellingService"])); };
    FlightCancellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightCancellingComponent, selectors: [["flight-cancelling"]], inputs: { flightId: "flightId" }, outputs: { closed: "closed" }, decls: 11, vars: 1, consts: [[1, "gray-bg", 2, "z-index", "99"], [1, "cancelling", 2, "z-index", "100"], [1, "cancelling-inside", "card"], [1, "header"], [1, "title"], [1, "content"], [1, "btn", "btn-default", 3, "click"]], template: function FlightCancellingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelling your Flight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightCancellingComponent_Template_button_click_9_listener($event) { return ctx.closeHandler(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This is a dummy dialog to cancel your flight # ", ctx.flightId, ". But dummy or not, this will be very expensive. ");
        } }, styles: [".gray-bg[_ngcontent-%COMP%] {\r\n    opacity: 0.4;\r\n    background-color: black;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    \r\n  } \r\n  \r\n  .cancelling[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n  } \r\n  \r\n  .cancelling-inside[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    margin: 100px auto;\r\n    \r\n    width: 400px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZmxpZ2h0LWFwcC9zcmMvYXBwL2ZsaWdodC1ib29raW5nL2ZsaWdodC1jYW5jZWxsaW5nL2ZsaWdodC1jYW5jZWxsaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7SUFFbEIsWUFBWTtFQUNkIiwiZmlsZSI6ImFwcHMvZmxpZ2h0LWFwcC9zcmMvYXBwL2ZsaWdodC1ib29raW5nL2ZsaWdodC1jYW5jZWxsaW5nL2ZsaWdodC1jYW5jZWxsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmdyYXktYmcge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgXHJcbiAgfSBcclxuICBcclxuICAuY2FuY2VsbGluZyB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuICBcclxuICAuY2FuY2VsbGluZy1pbnNpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICBcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgIl19 */"] });
    return FlightCancellingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightCancellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flight-cancelling',
                templateUrl: './flight-cancelling.component.html',
                styleUrls: ['./flight-cancelling.component.css']
            }]
    }], function () { return [{ type: _flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__["FlightCancellingService"] }]; }, { flightId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-cancelling/flight-cancelling.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/flight-booking/flight-cancelling/flight-cancelling.module.ts ***!
  \******************************************************************************/
/*! exports provided: FlightCancellingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightCancellingModule", function() { return FlightCancellingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _flight_cancelling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight-cancelling.component */ "./src/app/flight-booking/flight-cancelling/flight-cancelling.component.ts");




var FlightCancellingModule = /** @class */ (function () {
    function FlightCancellingModule() {
    }
    FlightCancellingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlightCancellingModule });
    FlightCancellingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlightCancellingModule_Factory(t) { return new (t || FlightCancellingModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return FlightCancellingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlightCancellingModule, { declarations: [_flight_cancelling_component__WEBPACK_IMPORTED_MODULE_2__["FlightCancellingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightCancellingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [],
                declarations: [_flight_cancelling_component__WEBPACK_IMPORTED_MODULE_2__["FlightCancellingComponent"]],
                entryComponents: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-cancelling/flight-cancelling.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/flight-booking/flight-cancelling/flight-cancelling.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FlightCancellingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightCancellingService", function() { return FlightCancellingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _default_flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-flight-cancelling.service */ "./src/app/flight-booking/flight-cancelling/default-flight-cancelling.service.ts");



var FlightCancellingService = /** @class */ (function () {
    function FlightCancellingService() {
    }
    FlightCancellingService.prototype.show = function (flightId) { };
    FlightCancellingService.ɵfac = function FlightCancellingService_Factory(t) { return new (t || FlightCancellingService)(); };
    FlightCancellingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlightCancellingService, factory: function (t) { return _default_flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__["DefaultFlightCancellingService"].ɵfac(t); }, providedIn: 'root' });
    return FlightCancellingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightCancellingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
                useClass: _default_flight_cancelling_service__WEBPACK_IMPORTED_MODULE_1__["DefaultFlightCancellingService"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-card/flight-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flight-booking/flight-card/flight-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlightCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightCardComponent", function() { return FlightCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




function FlightCardComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightCardComponent_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlightCardComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightCardComponent_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deselect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "background-color": a0 }; };
var _c1 = function () { return { showDetails: true }; };
var _c2 = function (a1, a2) { return ["../flight-edit", a1, a2]; };
var FlightCardComponent = /** @class */ (function () {
    function FlightCardComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FlightCardComponent.prototype.ngOnInit = function () {
    };
    FlightCardComponent.prototype.ngOnChanges = function (changes) {
    };
    FlightCardComponent.prototype.ngOnDestroy = function () {
    };
    FlightCardComponent.prototype.select = function () {
        this.selected = true;
        this.selectedChange.next(true);
    };
    FlightCardComponent.prototype.deselect = function () {
        this.selected = false;
        this.selectedChange.next(false);
    };
    FlightCardComponent.prototype.blink = function () {
        var _this = this;
        // Dirty Hack used to visualize the change detector
        // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        //              ^----- DOM-Element
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
        return null;
    };
    FlightCardComponent.ɵfac = function FlightCardComponent_Factory(t) { return new (t || FlightCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    FlightCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightCardComponent, selectors: [["flight-card"]], inputs: { item: "item", selected: "selected" }, outputs: { selectedChange: "selectedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 15, vars: 17, consts: [[1, "card", 3, "ngStyle"], [1, "header"], [1, "title"], [1, "content"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-default", 3, "routerLink"], [1, "btn", "btn-default", 3, "click"]], template: function FlightCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FlightCardComponent_button_11_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FlightCardComponent_button_12_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Edit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.selected ? "rgb(204, 197, 185)" : "white"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.item.from, " - ", ctx.item.to, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Flight-No.: #", ctx.item.id, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, ctx.item.date, "long"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c2, ctx.item.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1)));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2 });
    return FlightCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flight-card',
                templateUrl: './flight-card.component.html',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-edit/flight-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flight-booking/flight-edit/flight-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlightEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightEditComponent", function() { return FlightEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function FlightEditComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You haven't saved your modifications. Do you really want to leave me? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightEditComponent_div_4_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.decide(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightEditComponent_div_4_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.decide(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var FlightEditComponent = /** @class */ (function () {
    function FlightEditComponent(route) {
        this.route = route;
        this.showWarning = false;
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
            _this.showDetails = p['showDetails'];
        });
    };
    FlightEditComponent.ɵfac = function FlightEditComponent_Factory(t) { return new (t || FlightEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    FlightEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightEditComponent, selectors: [["app-flight-edit"]], decls: 10, vars: 3, consts: [[1, "card"], [1, "header"], [1, "title"], ["class", "alert alert-warning", "style", "margin:20px;", 4, "ngIf"], [1, "content"], [1, "alert", "alert-warning", 2, "margin", "20px"], [1, "btn", "btn-primary", 3, "click"]], template: function FlightEditComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flight Edit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlightEditComponent_div_4_Template, 7, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWarning);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id: ", ctx.id, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ShowDetails: ", ctx.showDetails, "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
    return FlightEditComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flight-edit',
                templateUrl: './flight-edit.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/flight-booking/flight-search/flight-search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/flight-booking/flight-search/flight-search.component.ts ***!
  \*************************************************************************/
/*! exports provided: FlightSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchComponent", function() { return FlightSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @flight-workspace/flight-api */ "../../libs/flight-api/src/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flight-card/flight-card.component */ "./src/app/flight-booking/flight-card/flight-card.component.ts");







function FlightSearchComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightSearchComponent_button_21_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delay 1st Flight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlightSearchComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.flights.length, " flights found! ");
} }
function FlightSearchComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "flight-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function FlightSearchComponent_div_24_Template_flight_card_selectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var f_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r11.basket[f_r10.id] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var f_r10 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", f_r10)("selected", ctx_r7.basket[f_r10.id]);
} }
var FlightSearchComponent = /** @class */ (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.from = 'Hamburg'; // in Germany
        this.to = 'Graz'; // in Austria
        this.urgent = false;
        // "shopping basket" with selected flights
        this.basket = {
            "3": true,
            "5": true
        };
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.ngOnInit = function () {
    };
    FlightSearchComponent.prototype.search = function () {
        if (!this.from || !this.to)
            return;
        this.flightService
            .load(this.from, this.to, this.urgent);
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent.ɵfac = function FlightSearchComponent_Factory(t) { return new (t || FlightSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_1__["FlightService"])); };
    FlightSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlightSearchComponent, selectors: [["flight-search"]], decls: 30, vars: 10, consts: [[1, "card"], [1, "header"], [1, "title"], [1, "content"], [1, "form-group"], ["name", "from", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "to", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "urgent", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-default", 3, "disabled", "click"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-default", 3, "click"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3"], [3, "item", "selected", "selectedChange"]], template: function FlightSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flight Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "From:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_9_listener($event) { return ctx.from = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_13_listener($event) { return ctx.to = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightSearchComponent_Template_input_ngModelChange_16_listener($event) { return ctx.urgent = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Urgent (When it's urgent it fails -- like in real life ;-)) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightSearchComponent_Template_button_click_19_listener($event) { return ctx.search(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FlightSearchComponent_button_21_Template, 2, 0, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FlightSearchComponent_div_22_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FlightSearchComponent_div_24_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.from);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.to);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.urgent);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.from || !ctx.to);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flights.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flights.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flights);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 8, ctx.basket));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _flight_card_flight_card_component__WEBPACK_IMPORTED_MODULE_4__["FlightCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2ZsaWdodC1hcHAvc3JjL2FwcC9mbGlnaHQtYm9va2luZy9mbGlnaHQtc2VhcmNoL2ZsaWdodC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });
    return FlightSearchComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'flight-search',
                templateUrl: './flight-search.component.html',
                styleUrls: ['./flight-search.component.css']
            }]
    }], function () { return [{ type: _flight_workspace_flight_api__WEBPACK_IMPORTED_MODULE_1__["FlightService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/flight-booking/passenger-search/passenger-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/flight-booking/passenger-search/passenger-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PassengerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengerSearchComponent", function() { return PassengerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PassengerSearchComponent = /** @class */ (function () {
    function PassengerSearchComponent() {
    }
    PassengerSearchComponent.prototype.ngOnInit = function () {
    };
    PassengerSearchComponent.ɵfac = function PassengerSearchComponent_Factory(t) { return new (t || PassengerSearchComponent)(); };
    PassengerSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassengerSearchComponent, selectors: [["app-passenger-search"]], decls: 2, vars: 0, template: function PassengerSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " passenger-search works!\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2ZsaWdodC1hcHAvc3JjL2FwcC9mbGlnaHQtYm9va2luZy9wYXNzZW5nZXItc2VhcmNoL3Bhc3Nlbmdlci1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
    return PassengerSearchComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassengerSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-passenger-search',
                templateUrl: './passenger-search.component.html',
                styleUrls: ['./passenger-search.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have been redirected to this page because you don't have the necessary rights for the reqeusted action. Login with a respective user account! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
        this.expertMode = false;
        this.needsLogin = false;
        this._userName = '';
    }
    Object.defineProperty(HomeComponent.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.changed = function ($event) {
        console.debug('$event.detail ', $event.target.detail);
        this.expertMode = $event.detail;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.needsLogin = !!this.route.snapshot.params['needsLogin'];
    };
    HomeComponent.prototype.login = function () {
        this._userName = 'Login will be implemented in another exercise!';
    };
    HomeComponent.prototype.logout = function () {
        this._userName = '';
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 2, consts: [[1, "card"], [1, "header"], [1, "title"], [1, "content"], ["class", "alert alert-warning", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "alert", "alert-warning"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener($event) { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener($event) { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.userName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.needsLogin);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2ZsaWdodC1hcHAvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar-cmp"]], decls: 47, vars: 0, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], [1, "sr-only"], [1, "icon-bar", "bar1"], [1, "icon-bar", "bar2"], [1, "icon-bar", "bar3"], ["href", "#", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "ti-panel"], [1, "dropdown"], [1, "ti-bell"], [1, "notification"], [1, "caret"], [1, "dropdown-menu"], ["href", "#"], [1, "ti-settings"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener($event) { return ctx.sidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Flight42");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stats");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "b", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Notification 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Notification 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Notification 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Notification 4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Another notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar-cmp',
                templateUrl: 'navbar.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/city.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/city.pipe.ts ***!
  \*******************************************/
/*! exports provided: CityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityPipe", function() { return CityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CityPipe = /** @class */ (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value, fmt) {
        var short, long;
        switch (value) {
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                break;
            case 'Graz':
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
                break;
            default:
                short = long = value; //'ROM';
        }
        if (fmt === 'short')
            return short;
        return long;
    };
    CityPipe.ɵfac = function CityPipe_Factory(t) { return new (t || CityPipe)(); };
    CityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "city", type: CityPipe, pure: true });
    return CityPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'city',
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _pipes_city_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/city.pipe */ "./src/app/shared/pipes/city.pipe.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: []
        };
    };
    SharedModule.forChild = function () {
        return {
            ngModule: SharedModule,
            providers: []
        };
    };
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_city_pipe__WEBPACK_IMPORTED_MODULE_2__["CityPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_pipes_city_pipe__WEBPACK_IMPORTED_MODULE_2__["CityPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    _pipes_city_pipe__WEBPACK_IMPORTED_MODULE_2__["CityPipe"],
                ],
                exports: [
                    _pipes_city_pipe__WEBPACK_IMPORTED_MODULE_2__["CityPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var _c0 = function () { return { aux: "basket" }; };
var _c1 = function (a0) { return { outlets: a0 }; };
var _c2 = function (a0) { return [a0]; };
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar-cmp"]], decls: 22, vars: 6, consts: [[1, "sidebar-wrapper"], [1, "logo"], [1, "simple-text"], [1, "logo-img"], ["src", "../../assets/img/angular2-logo.png", "alt", ""], [1, "nav"], ["routerLink", "home"], [1, "ti-home"], ["routerLink", "flight-booking/flight-search"], [1, "ti-arrow-top-right"], ["routerLinkActive", "active"], [3, "routerLink"], [1, "ti-shopping-cart"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Flight42 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Flights");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Basket");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0))));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], encapsulation: 2 });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sidebar-cmp',
                templateUrl: 'sidebar.component.html',
            }]
    }], null, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\bak\beratung\angular2\workshops_advanced\advanced-nx-workspace\apps\flight-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map