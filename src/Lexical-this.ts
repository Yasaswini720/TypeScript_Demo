class PersonExample {
    _age: number
    constructor(_age: number){
        this._age = _age
    }

    glowOld = () => {
        this._age++
    }

    age() {
        return this._age
    }
}

const person = new PersonExample(0)
person.glowOld()
console.log("age:", person.age())

const growOld = person.glowOld
console.log("age:", growOld())

setTimeout(person.glowOld, 1000)
console.log('age:', person.age())
