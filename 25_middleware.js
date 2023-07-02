/* 
what is middleware?
it's some function() . used along routes. modify res & req . 



*/
const express = require('express')
const app = express();

const req_filter = (req,resp,next)=>{
    // console.log('req_filter')
    if(! req.query.age){
        resp.send("please provide age!")
    }
    else if (req.query.age<18){
        resp.send("you can not access this page !!!...")
    }
    else{
        next()
    }
   
}

app.use(req_filter)

app.get('/',(req,resp)=>{
    resp.send("welcome to home page!")
})
app.get('/user',(req,resp)=>{
    resp.send("welcome to users page!")
})

app.listen(3100)