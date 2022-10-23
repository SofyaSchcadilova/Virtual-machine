let mem = new Array();
const readline = require('readline-sync');
const fs = require('fs');
const arg = process.argv;
let myProg = fs.readFileSync(arg[2], 'utf-8');
myProg = myProg.replace(/[\n\r]/g, " ");
myProg = myProg.replaceAll("  ", " ");
const s = myProg + ' exit';
mem = s.split(' ');
let ip = 0;

while (mem[ip] != 'exit'){
    switch(mem[ip]){
        case 'input':
            let comm = readline.question('Enter: ')
            mem[mem[ip + 1]] = Number(comm);
            ip += 2;
            break;
        case 'output':
            console.log(mem[mem[ip + 1]])
            ip += 2;
            break;
        case 'set':
            mem[mem[ip + 1]] = Number(mem[ip + 2]);
            ip += 3;
            break;
        case 'sub':
            mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[mem[ip + 2]];
            ip += 4;
            break;
        case 'mul':
            mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
            ip += 4;
            break;
        case 'cmp':
            if (mem[mem[ip + 1]] == mem[mem[ip + 2]]){
                ip = Number(mem[ip + 3]);
                break;
            }else{
                ip += 4; 
                break;
            }
        case 'cmpcom':
            if (mem[mem[ip + 1]] > mem[mem[ip + 2]]){
                ip = Number(mem[ip + 3]);
                break;
            }else{
                ip += 4;
                break;
            }
        case 'jmp':
            ip = Number(mem[ip + 1]);
            break;
    }
}
