function abc(){
    return "hello world"
}

let hello = abc()
const trimmed = (hello as string).trim()
//or
const trimmed1 = <string>hello.trim()

