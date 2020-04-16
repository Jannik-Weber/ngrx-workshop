import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import * as i0 from "@angular/core";
import * as i1 from "./logger.config";
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
LoggerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(i0.ɵɵinject(i1.LoggerConfig, 8)); }, token: LoggerService, providedIn: "root" });
LoggerService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [LoggerConfig])
], LoggerService);
export { LoggerService };
//# sourceMappingURL=logger.service.js.map