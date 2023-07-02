/* 
Render(display)


*/

const express =require('express')
const app = express()
app.get('',(req,res)=>{
    // console.log("data sent by browser>",req.query.name) 
    res.send(`<h1>welcome to Home page</h1> 
    <a href="/about"> go to about page</a>`)
})

app.get('/about',(req,res)=>{
    res.send(`${req.query.name}<h1> welcome to about page</h1><a href="/"> go to home page</a>`)
})
app.get('/contact',(req,res)=>{
    res.send("hello.. This is This is the contact page")
})
app.listen(3100)