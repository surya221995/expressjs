const express =require("express")
const app = express()
const port = process.env.PORT || 5000
const datafile_json  = require("./datafile.json")

// app.get("/",(req,res)=>
//     {
//         res.send(datafile_json);
//         // res.send("Hi i am live ");
//     }
//     )

//req.body ------sent Actual Data
app.get("/",(req,res)=>
    {
        res.send(req.body);
        // res.send("Hi i am live ");
    }
    )
//req.Params ------
//localhost:5000/employe/123-----------------
app.get("/employe/:id",(req,res)=>
    {
        res.send(req.params);
        // Result : { id : 123}
        // res.send("Hi i am live ");
    }
    )
//req.query ---------
//localhost:5000/employe/details?name=abhi
app.get("/",(req,res)=>
    {
        res.send(req.query);
         // Result : { "name" : "abhi"}
        // res.send("Hi i am live ");
    }
    )

    app.listen(port,()=>{
        console.log("app is listening on port 6000")
    })