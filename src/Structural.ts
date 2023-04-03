type User = {id: string}
type Product = {id: string}

let user: User = {id: "Yasaswini"}
let product: Product = {id: "cycle"}

// as user and product variables have same structure
// they can be assigned to each other
user = product
product = user

type Poind2D = {x:number, y:number}
type Point3D = {x:number, y:number, z:number}

let point2D: Poind2D = {x:0, y:10}
let point3D: Point3D = {x:0, y:10, z:20}

//extra is okay
function fun(point: Poind2D){ /**.................. */}
fun(point3D);
point2D = point3D


/**
 * point3D = point2D
 * function abc(point: Point3D) {//...................
 * }
 * abc(point2D)
 */
// error    point3D = point2D