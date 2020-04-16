import { __decorate, __param, __metadata } from 'tslib';
import { Optional, ɵɵdefineInjectable, ɵɵinject, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class LoggerConfig {
}

let LoggerService = class LoggerService {
    constructor(config) {
        this.config = config;
    }
    debug(message) {
        if (!this.config.enableDebug)
            return;
        console.debug(message);
    }
    log(message) {
        console.log(message);
    }
};
LoggerService.ctorParameters = () => [
    { type: LoggerConfig, decorators: [{ type: Optional }] }
];
LoggerService.ɵprov = ɵɵdefineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(ɵɵinject(LoggerConfig, 8)); }, token: LoggerService, providedIn: "root" });
LoggerService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [LoggerConfig])
], LoggerService);

let LogMonitorComponent = class LogMonitorComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], LogMonitorComponent.prototype, "stats", void 0);
LogMonitorComponent = __decorate([
    Component({
        selector: 'logger-lib-monitor',
        template: `
    <h1>
      Log Monitor (dummy)
    </h1>
    <p>{{stats}}</p>
  `,
        styles: []
    })
], LogMonitorComponent);

var LoggerModule_1;
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

/*
 * Public API Surface of logger-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogMonitorComponent, LoggerConfig, LoggerModule, LoggerService };
//# sourceMappingURL=my-logger-lib.js.map
