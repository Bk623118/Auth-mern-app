const joi = require("joi")
const SignupValidation = (req,res,next )=>{
    const schema = joi.object({
         name : joi.string().min(3).max(20).required(),
         email : joi.string().email().required(),
         password : joi.string().min(4).max(20).required()
    })


    const {error} = schema.validate(req.body);
    if (error){
        return res.status(400).json({message:"bad request",error})
    }
    next();
}


const LoginValidation = (req,res,next )=>{
    const schema = joi.object({
         email : joi.string().email().required(),
         password : joi.string().min(4).max(20).required()
    })


    const {error} = schema.validate(req.body);
    if (error){
        return res.status(400).json({message:"bad request",error})
    }
    next();

}

module.exports ={
    SignupValidation,
    LoginValidation
}