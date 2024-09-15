const express = require("express")
const app = express();

const product_routes = require("./routes/products")  //given route folder path to access all routes

const PORT = process.env.PORT || 5000;

//Middleware to set route 

app.use("/api/productsdata",product_routes)  ; // localhost:5000/api/productsdata  :- {msg :"i am getallproducts"}
                                               // localhost:5000/api/productsdata/testing  :- {msg : " i am allproductsTesting"}
                                               
// in controllers/products.js(shows what to do on that path )  and    routes/products.js(shows path)
// 1st path is ("/")  if we hit "localhost:5000/api/productsdata"  it call controller program getAllProducts()"" ====> we get "i am getallproducts"
// 2nd path is ("/testing")  if we hit "localhost:5000/api/products/testing" it call controller fun getAllProductsTesting()  ====> we get "i am allproductsTesting"
const start = async() =>{
    try {
        app.listen (PORT,()=>
        console.log("i am connected"))
    } catch (error) {
        console.log(error)
    }
}
start()


// app.get("/",(req,res)=>
// {
//     res.send("hii i am live");
// }
// )