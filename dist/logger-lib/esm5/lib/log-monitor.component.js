import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
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
export { LogMonitorComponent };
//# sourceMappingURL=log-monitor.component.js.map