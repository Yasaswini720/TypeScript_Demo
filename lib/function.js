"use strict";
function add(a, b) {
    return a + b;
}
function log3(message) {
    console.log("Log:", message);
}
//rest parameter = n number or args
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2);
sum(1, 2, 3);
