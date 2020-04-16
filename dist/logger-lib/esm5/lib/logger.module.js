import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
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
export { LoggerModule };
//# sourceMappingURL=logger.module.js.map