"use strict";
// error    const obj: a = {x:10, y:20}
const con = { x: 10, y: 20 };
// error    con = {x:100, y:200}
con.x = 100;
con.y = 200;
