const express=require('express')
const app=express()
//important to use Middleware express.json()----to parse Object ///or help to extract json
app.use(express.json())

app.post('/users',(req,res)=>{
    const data =req.body
    res.json({data})
})


// open thunder client post request from client ----to server     //-----POST ----->localhost:5000/users--- 
//   -------------------------------------------------------------//-Body---->JSON--->{"name":"sp","email":"sp@gmail.com"}-------click ---Send
// Response :----use Middelware express.json() ---to extract json data----if not use result ------{}empty object
// Response :-
// {
//     "data": {
//       "name": "sp",
//       "email": "sp@gmail.com"
//     }
//   }

app.listen(5000,(req,res)=>{
    console.log('App server running')
})