type alias = {x: number, y: number}

// error    const obj: a = {x:10, y:20}
const con: alias = {x:10, y:20}

// error    con = {x:100, y:200}
con.x = 100
con.y = 200


