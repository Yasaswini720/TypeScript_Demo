"use strict";
class PersonExample {
    constructor(_age) {
        this._age = _age;
    }
    glowOld() {
        this._age++;
    }
    age() {
        return this._age;
    }
}
const person = new PersonExample(0);
// person.growOld()
const growOldVar = person.glowOld;
growOldVar();
