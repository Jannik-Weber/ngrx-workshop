import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import * as i0 from "@angular/core";
import * as i1 from "./logger.config";
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
    LoggerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(i0.ɵɵinject(i1.LoggerConfig, 8)); }, token: LoggerService, providedIn: "root" });
    LoggerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [LoggerConfig])
    ], LoggerService);
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=logger.service.js.map