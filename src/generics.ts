//FIFO Queue
class NewQueue<T> {
    data = []
    push(item: T) { this.data.push(item) }
    pop(): T|undefined { return this.data.shift() }    
}

const Q = new NewQueue<number>();
Q.push(123)
Q.push(456)
Q.push(789)
Q.pop()

console.log(Q.data)