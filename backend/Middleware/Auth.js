const jwt = require("jsonwebtoken")
require("dotenv").config();

const ensureauthenticated = (req,res,next)=>{
     const auth = req.headers["authorisation"];
     if(!auth){
        return res.status(403)
        .json({
    message:"Unauthorized ,Jwt token required"
})
     }
     try{

const decoded =jwt.verify(auth,process.env.JWT_SECRET);
   req.user = decoded;
   next();

     }catch(err){

   return res.status(403)
              .json({
                message:"Unauthorized ,JWT token wrong ,expire"
              })


     }

}

module.exports = ensureauthenticated;