"use strict";
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
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}
let boss = new Boss("Emy", "Butoi");
console.log(boss.firstName + " " + boss.lastName);
