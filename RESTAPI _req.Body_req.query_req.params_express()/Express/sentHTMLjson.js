 const express =require("express")
 const app=express()
 const port =5000

app.get ("/",(req,res)=>{

    res.send("<h1> welcome to home page</h1>")
})
// alt+ctrl ========change at same time no of text delete or write
app.get ("/html",(req,res)=>{
    res.write("<h1> welcome to home page</h1>")
    res.write("<h1> welcome to home page</h1>")
    res.send()///to close connection if not write this then it will continuous reload
})
// status 500----internal error

//array of an object ----use to show no of object in json format   
// application-type : application/json ;charset=utf-8
app.get ("/singleobjectjson",(req,res)=>{
    res.send(
    // object convert automatically to json format
        {
        id:1,
        name:"surya",
        },
      
    )
})

app.get ("/singleobjectjson",(req,res)=>{
    res.json(
    // res.send and res.json difference ------res.json will convert non object such as null and undefined ,which are not valid json
        {
        id:1,
        name:"surya",
        },
      
    )
})

//array of object ----use to show no of object in json format
app.get ("/arrayofobjjson",(req,res)=>{
    res.send(
        [
        {
        id:1,
        name:"surya",
        },
        {
            id:2,
            name:"pankaj",
            },
        ]
    )
})


app.listen(port,()=>{
    console.log("server is running")
})