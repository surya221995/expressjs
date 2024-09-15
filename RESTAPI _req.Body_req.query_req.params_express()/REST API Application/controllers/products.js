const jsonfile = require("../datafile.json")
const getAllProducts = async (req ,res)=> {
    res.status(200).json(jsonfile)
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({msg : " i am allproductsTesting"})
}

module.exports ={getAllProducts, getAllProductsTesting }