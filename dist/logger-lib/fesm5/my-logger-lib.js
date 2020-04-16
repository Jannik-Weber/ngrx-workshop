import { __decorate, __param, __metadata } from 'tslib';
import { Optional, ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());

var LoggerService = /** @class */ (function () {
    function LoggerService(config) {
        this.config = config;
    }
    LoggerService.prototype.debug = function (message) {
        if (!this.config.enableDebug)
            return;
        console.debug(message);
    };
    LoggerService.prototype.log = function (message) {
        console.log(message);
    };
    LoggerService.ctorParameters = function () { return [
        { type: LoggerConfig, decorators: [{ type: Optional }] }
    ]; };
    LoggerService.ɵprov = ɵɵdefineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(ɵɵinject(LoggerConfig, 8)); }, token: LoggerService, providedIn: "root" });
    LoggerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [LoggerConfig])
    ], LoggerService);
    return LoggerService;
}());

var LogMonitorComponent = /** @class */ (function () {
    function LogMonitorComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], LogMonitorComponent.prototype, "stats", void 0);
    LogMonitorComponent = __decorate([
        Component({
            selector: 'logger-lib-monitor',
            template: "\n    <h1>\n      Log Monitor (dummy)\n    </h1>\n    <p>{{stats}}</p>\n  ",
            styles: []
        })
    ], LogMonitorComponent);
    return LogMonitorComponent;
}());

// imports: [ LoggerModule.forRoot({ ... }) ] 
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule_1 = LoggerModule;
    // Setup
    LoggerModule.forRoot = function (config) {
        return {
            ngModule: LoggerModule_1,
            providers: [
                { provide: LoggerConfig, useValue: config }
            ]
        };
    };
    var LoggerModule_1;
    LoggerModule = LoggerModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                LogMonitorComponent
            ],
            // providers: [
            //   LoggerService
            // ],
            exports: [
                LogMonitorComponent
            ]
        })
    ], LoggerModule);
    return LoggerModule;
}());

/*
 * Public API Surface of logger-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogMonitorComponent, LoggerConfig, LoggerModule, LoggerService };
//# sourceMappingURL=my-logger-lib.js.map
