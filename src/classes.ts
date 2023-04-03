class Animal {
    // private to limit the scope of the vailavle with in the class
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }

}
let cat = new Animal('Cat')
cat.move(10)

class Bird extends Animal {
    fly(distanceInMeters: number): void {
        console.log(`${this.name} flew ${distanceInMeters}m.`)
        // child class can not use parent private property(name)
    }
}