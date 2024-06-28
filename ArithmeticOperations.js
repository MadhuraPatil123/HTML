var fs = require('fs');
var [x,y,z]=fs.readFileSync('input.txt').toString().trim().split('\n');

var a = parseInt(x);
var b = parseInt(y);
var c = parseInt(z);


function performOperation(a, b, c) {
    if (a == 1) {
        return b+c;
    }
    else if(a == 2) {
        return b-c;
    }
    else if(a == 3) {
        return b*c;
    }
    else if(a==4) {
        return b/c;
    }
    else
        return 0;
}
var res = performOperation(a,b,c);
console.log(res);