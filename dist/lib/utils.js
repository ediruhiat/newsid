"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = void 0;
function isNumeric(str) {
    return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=utils.js.map