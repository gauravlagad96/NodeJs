/* 
types of modules 
1:-> global modules: no needs of imports  e.g. console ,warn,filter()
2:-> non-global modules: needs to be imports  e.g. fs,os


os modules:--Get information about the computer's operating system:
fs modules:--The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files




*/


const os = require('os');
const fs = require('fs');
// fs.writeFileSync('hello.txt','I am a coder');
const data = fs.readFileSync("hello.txt","utf8");
 console.log(data)
