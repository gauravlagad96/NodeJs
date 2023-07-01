/* 
path module: path.join() function takes the  parameter 
__dirname , "folder_name"


*/
const fs =require('fs')
const os =require('os')
const path = require('path')

const dirPath = path.join(__dirname,'files')
// console.log(dirPath)

// create a multiple files using for loop:
/*
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file"+i+"")
    // fs.writeFileSync(`hello${i}.txt`,"a simple text file")
}
*/
// Reading(get) multiple files using forEach loop:
fs.readdir(dirPath,(err,files)=>{
 files.forEach((item)=>{
    console.log("files name is :"+ item)
 })
})