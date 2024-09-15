// Express.js is Node js Framework
// Provide simple API to Build website ,app,backends
// why need express.js?
// to create RESET API server .........if create using plane node.js core module then it is lengthy code

// How to install express
// 1.install Node.js
// 2.install package manager (package.json)name cannot be capital-----npm init -y
// 3.npm i express  ----after install this package-lock.json file created it gives all information about dependency




// required express module
const express =require("express")
// create express application .the express() function is top-level function exported by express module
const app=express()


// create route
// app.get(route,callbackfunction)
// 1.get-------read
// 2.post-------create
// 3.put-------update
// 4.delete-------delete
// '/'-----shows route page  =localhost:5000

// localhost:5000--------------route path
app.get('/',(req,res)=>{
      res.send("hello express")
})


// localhost:5000/about--------------route path
app.get('/about',(req,res)=>{
    res.send("hello express from about")
})

// the callback function has 2 parameters ,request(req) & response(res)
// the request Object(req) represent ----HTTP request---it use for request like------req.body ,  reqParams ,  req.query  ,HTTP header
// the response Object(res)represent ----HTTP response ---it send respnose when recive HTTP request


// listen to the port 
app.listen (5000,()=>{
    console.log("port listening")
})

