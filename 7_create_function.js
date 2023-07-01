/* 
step to create servers:
1. import http module .   it's non-global module
2.createServer() function -it takes a function as a parameters. it takes two parameter i.e req,resp.
3.write() function - it's used to send response 
4.end() function - used to end response

*/

const http= require('http');
function data(req, resp){
    resp.write("<h1>hello how are you ??!</h1>");
    resp.end();
}

http.createServer(data).listen(9696);



// arrow function
const test = (a)=>a*13;

// simple function

function test1(para1){
    return para1*2;
}