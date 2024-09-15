const express = require('express');
const app = express();

//localhost:5000/user/123
app.get('/user/:id',(req,res)=>{
  const {id}=req.params
  res.json({id}) 
})
// open thunderclient :- GET =- localhost:8000/user/123
// Response :-----------    //  {
                            //  "id": "123"
                            // }

app.listen(8000,(req,res)=>{
    console.log('app is running on port 5000')
})