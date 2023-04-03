function formatCommandLine(input: string | string[]) {
    let line = ''
    if(typeof input == 'string') {
        line = input.trim()
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line
}

console.log(formatCommandLine('hello '))
console.log(formatCommandLine(['hello', 'yasaswini']))
// error    console.log(formatCommandLine(1234))
