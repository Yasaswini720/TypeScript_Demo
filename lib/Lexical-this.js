"use strict";
class PersonExample {
    constructor(_age) {
        this.glowOld = () => {
            this._age++;
        };
        this._age = _age;
    }
    age() {
        return this._age;
    }
}
const person = new PersonExample(0);
person.glowOld();
console.log("age:", person.age());
const growOld = person.glowOld;
console.log("age:", growOld());
setTimeout(person.glowOld, 1000);
console.log('age:', person.age());
