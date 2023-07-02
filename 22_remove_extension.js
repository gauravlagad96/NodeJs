/* 
Remove extension from url
apply get method   : using sendFile method() to load pages.
remove extension
make 404 page
apply 404 page
*/
// const http = require('http')
const path = require('path')

const express =require('express')
const app = express();
const public_path = path.join(__dirname,'public')   //fetch to full path using join() function.
// console.log(public_path)
// app.use(express.static(public_path))    //static function():->load static pages (content).

app.get('',(_,resp)=>{
    resp.sendFile(`${public_path}/index.html`)
})
app.get('/aboutme',(_,resp)=>{
    resp.sendFile(`${public_path}/about.html`)    // not display file extension.
})
app.get('*',(_,resp)=>{                            // create 404 page.
    resp.sendFile(`${public_path}/nopage.html`)
})
app.listen(3100);