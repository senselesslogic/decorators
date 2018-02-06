"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function f() {
    console.log('evaluated f()');
    return function (target, propertyKey, descriptor) {
        console.log('called f()');
    };
}
function g() {
    console.log('evaluated g()');
    return function (target, propertyKey, descriptor) {
        console.log('called g()');
    };
}
var DecoOrder = /** @class */ (function () {
    function DecoOrder() {
    }
    DecoOrder.prototype.tryMe = function () {
        console.log('tryMe called');
    };
    __decorate([
        f(),
        g()
    ], DecoOrder.prototype, "tryMe", null);
    return DecoOrder;
}());
exports.DecoOrder = DecoOrder;
//# sourceMappingURL=DecoOrder.js.map