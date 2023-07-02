/* 

*/

const path = require('path')

const express = require('express')
const app = express();
const public_path = path.join(__dirname, 'public')   //fetch to full path using join() function.

app.set("view engine", 'ejs')                                             //set templete engine it takes 2 parameter ( )

app.get('', (_, resp) => {
    resp.sendFile(`${public_path}/index.html`)
})

app.get("/login",(req,resp)=>{
    resp.render('login');
})


app.get('/profile', (_, resp) => {
     const user ={
        name:'Gaurav',
        email:"g@gmail.com",
        skills:['php','NodeJs',"AngularJs",'java',48]
     }
    resp.render('profile',{user})
})


app.get('*', (_, resp) => {
    resp.sendFile(`${public_path}/nopage.html`)
})
app.listen(3100);