import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
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
export { LogMonitorComponent };
//# sourceMappingURL=log-monitor.component.js.map