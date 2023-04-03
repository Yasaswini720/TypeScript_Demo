"use strict";
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleAny = 'hi';
//unknown
exampleUnknown = 678;
exampleUnknown = 'world';
// any
// value of any type is assigned to boolean type
let anyBool = exampleAny;
//unknown
// safer than any
// value of unknown type can not be assigned to boolean type
// let unknownBool: Boolean = exampleUnknown
// the above situation can be solved with validation
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownBool = exampleUnknown;
}
// ordinary approach
function log(value) {
    console.log(value.toFixed(2));
}
log(123.456);
log("hello world");
// better approach
function log1(value1) {
    if (typeof value1 == 'number') {
        console.log(value1.toFixed(2));
    }
    else {
        console.log(value1);
    }
}
log1(123.456);
log1("hello world");
