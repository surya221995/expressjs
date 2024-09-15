const express = require('express')
const app=express()

//localhost:5000/users?limit=10&page=1&name=abc
app.get('/users',(req,res)=>{
    const {limit,page,name} =req.query
    res.json({limit,page,name})

})


// open Thunderclient --to check api ------GET----localhost:5000/users?limit=10&page=1&name=abc
// Response:-response get as json format
// {
//     "limit": "10",
//     "page": "1",
//     "name": "abc"
//   }

app.listen(5000,(req,res)=>{
    console.log("server is running")
})