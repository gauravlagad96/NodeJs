/* 
crud with file system 
1.create(make) file
2.Read file
3.Update file
4.Rename file  // not curd part
5.Delete file 


What is buffer: Temporary memory allocation 

*/

const fs =require('fs')
const path = require('path')
const dirPath=path.join(__dirname,"crud")

const file_path=`${dirPath}/apple.txt`

// fs.writeFileSync(file_path,"This is a simple text file");

// fs.readFile(file_path,'utf-8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(file_path,"and file name is apple.txt !!!!...",(err)=>{
//     if(!err){
//         console.log("file is updated...")
//     }
// })

fs.rename(file_path,`${dirPath}/orange.txt`,(err)=>{
    if(!err){
        console.log("file name is updated...")
    }
})

// fs.unlinkSync(`${dirPath}/orange.txt`);