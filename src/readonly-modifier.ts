type Point = {
    readonly x: number,
    readonly y: number
}

const point: Point = {
    x: 10,
    y: 20
}

// Var assignment is not possible
// Cannot assign to 'point' because it is a constant
// point = {x:0, y:0}

// propert assignment
// Cannot assign because it is a read-only property.
// point.x = 0
// point.y = 0

// property read
console.log(point.x, point.y)

class Painter {
    public readonly name: string
    constructor(name: string){
        this.name = name
    }
}

const Ravi_Varma = new Painter('Ravi Varma')
console.log(Painter.name) // allow
// disallowed->   Painter.name = "Leonardo da Vinci" 