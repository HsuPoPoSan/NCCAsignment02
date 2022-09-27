const express = require('express');
const path = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send("<h1>This is main page</h1>");
})

app.get("/hppsprofile",(req,res)=>{
    res.sendFile("index.html",{root:'/home/hpps/Documents/WebCourse(NCC)/assignment2'});
})

app.listen(3000,()=>{
    console.log("Server starting at port : 3000")
})