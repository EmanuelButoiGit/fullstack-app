"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = void 0;
class Boss {
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
}
exports.Boss = Boss;
