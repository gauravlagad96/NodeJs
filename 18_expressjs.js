/* 
what is express js:
it's a node js web framework

video time:csbs is 2.53 hrs.

* get() function provide routes : it takes 2 parameter .

*/
const express =require('express')
const app = express()
app.get('',(req,res)=>{
    console.log("data sent by browser>",req.query.name)
    res.send("welcome  "+  req.query.name)
})

app.get('/about',(req,res)=>{
    res.send("hello.. This is This is about page")
})

app.listen(3100)