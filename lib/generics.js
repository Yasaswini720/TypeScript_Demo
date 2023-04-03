"use strict";
//FIFO Queue
class NewQueue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const Q = new NewQueue();
Q.push(123);
Q.push(456);
Q.push(789);
Q.pop();
console.log(Q.data);
