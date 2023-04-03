"use strict";
let user = { id: "Yasaswini" };
let product = { id: "cycle" };
// as user and product variables have same structure
// they can be assigned to each other
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
//extra is okay
function fun(point) { }
fun(point3D);
point2D = point3D;
/**
 * point3D = point2D
 * function abc(point: Point3D) {//...................
 * }
 * abc(point2D)
 */
// error    point3D = point2D
