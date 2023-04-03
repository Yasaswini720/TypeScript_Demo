let regexp: RegExp = new RegExp('ab+c') //Regular expresion
let array: Array<number> = [1,2,3] //Array of numbers
let set: Set<number> = new Set([1,2,3]) //set of numbers

//first in first out collection
class Queue<T> {
    private data: Array<T> = []
    push(item: T) { this.data.push(item) }
    pop(): T | undefined { return this.data.shift() }
}

let queue: Queue<number> = new Queue