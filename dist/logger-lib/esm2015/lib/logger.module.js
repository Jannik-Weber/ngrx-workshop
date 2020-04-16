var LoggerModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
// imports: [ LoggerModule.forRoot({ ... }) ] 
let LoggerModule = LoggerModule_1 = class LoggerModule {
    // Setup
    static forRoot(config) {
        return {
            ngModule: LoggerModule_1,
            providers: [
                { provide: LoggerConfig, useValue: config }
            ]
        };
    }
};
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
export { LoggerModule };
//# sourceMappingURL=logger.module.js.map