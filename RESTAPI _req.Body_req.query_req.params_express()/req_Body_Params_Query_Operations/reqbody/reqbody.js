
// run code using ----mode reqbody.js
const express = require("express")
// app.use(cors());
const bodyparser =require('body-parser')  //-----require body-parser middleware to use in project
const app =express();
app.use(bodyparser.urlencoded({extended: false}));//parse request body for every incomming request
//if-content-type : application/x-www.form-urlencoded 
// app.use(express.json());  /* bodyParser.json() is deprecated */
// if-content-type : application/json
//how get form data from page
//netwotk tab--header -----content-type : application/x-www.form-urlencoded --------request method : POST
app.get("/user/add",(req,res)=>{
    res.send(`<form method="POST">
        <div><input name='username'/></div>
        <div><button>add</button></div>
        </form>`)
})

app.post('/user/add',(req,res)=>{
    console.log(req.body)
    console.log('POST Request')
    res.redirect('/');//after form submit and req.body get object of form data it will go to home page i.e localhost:5000
    // result : [Object: null prototype] { username: 'hello' } ---------collect data from form input field   -----
    // requirement : req.body  ----- to use this need ---bodyparser ---because content-type :application/urlencoded
    // i.e data is in urlencoded format so parse data using bodyparser---means it preapare in ---JSON Object---then only req insert body
    //catch username by which was sent through POST Request  using---------------- bodyparser-----------install body Parser

})
app.get("/",(req,res)=>{
    res.send("hello we created server Home Page")
})

app.listen(5000,(req,res)=>{
    console.log('Server is running on port 5000')
})