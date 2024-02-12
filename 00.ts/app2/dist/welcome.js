"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = function (userName, salutation) {
    return `Hello ${(salutation !== null && salutation !== void 0 ? salutation : '')} ${userName} `;
};
exports.default = greet;
