function add(a:number, b:number): number {
    return a+b
}

function log3(message: string): void {
    console.log("Log:", message)
}

//rest parameter = n number or args
function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current
    });
}

sum(1,2)
sum(1,2,3)