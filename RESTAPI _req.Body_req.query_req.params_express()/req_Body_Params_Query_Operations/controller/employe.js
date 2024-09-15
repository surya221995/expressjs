const jsonfile =require('../datafile.json')

const reqBody = async(req,res) => {
     res.status(200).json(jsonfile)
}

// const reqParams = async(req,res)=>{
//     res.status(200).json()
// }