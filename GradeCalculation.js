//app.js
var fs = require('fs');
var [a,b,c,d,e] = fs.readFileSync('input.txt').toString().trim().split('\n');

const {gradecalculate} = require('./calculate.js');

var a = parseInt(a);
var b = parseInt(b);
var c = parseInt(c);
var d = parseInt(d);
var e = parseInt(e);

var res = gradecalculate(a,b,c,d,e);
if(res) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

//calculate.js

var fs = require('fs');
//fill your code
function gradecalculate(a,b,c,d,e) {
    if((a+b+c+d+e)/5 > 70){
        return true;
    }
    else {
        return false;
    }
}
exports.gradecalculate = gradecalculate;