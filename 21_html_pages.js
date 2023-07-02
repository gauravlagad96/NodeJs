// const http = require('http')
const path = require('path')

const express =require('express')
const app = express();
const public_path = path.join(__dirname,'public')
// console.log(public_path)
app.use(express.static(public_path))    //static function():->load static pages (content).

app.listen(3100);