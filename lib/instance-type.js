"use strict";
let regexp = new RegExp('ab+c'); //Regular expresion
let array = [1, 2, 3]; //Array of numbers
let set = new Set([1, 2, 3]); //set of numbers
//first in first out collection
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue;
