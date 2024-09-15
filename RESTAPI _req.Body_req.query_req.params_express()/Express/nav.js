
    // www.thapa.com ------welcome to home page.
    //  /about --------welcome to about page




const express =require("express")
const app =express();
const port=5000 ;
//localhost:5000
app.get ("/",(req,res) =>{
    res.send("welcome to home page")
})
//localhost:5000/about
app.get("/about",(req,res)=>{
    res.send("welcome to about page ")  //it will give network tab status :304 =not modified
})
//localhost:5000/contact
app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to contact page ") //it will give network tab status :200 =ok
})

app.listen(port ,()=>{
    console.log(`app running on port ${port}`)
})