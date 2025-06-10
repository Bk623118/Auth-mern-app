const ProductRouter = require("express").Router()
const ensureauthenticated = require("../Middleware/Auth");


ProductRouter.get("/",ensureauthenticated, (req,res)=>{
    console.log("===login user detail===" , req.user);
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {

            name:'tv',
            price : 200000 
        }
    ])
} )


module.exports = ProductRouter;


