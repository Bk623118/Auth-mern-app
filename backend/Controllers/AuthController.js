const UserModel = require("../Models/user")
const jwt= require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signup = async (req,res)=>{
    try{
        const {name,email,password} =req.body;
        const user = await UserModel.findOne({email});
        if (user){
            return res.status(409)
            .json({message:"user is already exist, you can login", success:false});
        }
        const userModel = new UserModel({name,email,password });
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save();
        res.status(201)
        .json({
            message:"signup successfully",
            success: true

        })  

    } catch(err){

         res.status(500)
           .json({
            message:"Internal aserver error",
            success: false
})

    }
}

const login = async (req,res)=>{
    try{
        const {email,password} =req.body;
        const user = await UserModel.findOne({email});
        if (!user){
            return res.status(403)
            .json({message:"AUTH FAILED EMAIL AND PASS IS WORNG", success:false});
        }

         const isPassEqual =await bcrypt.compare(password,user.password);
         if(!isPassEqual)
        res.status(403)
        .json({
            message:"AUTH FAILED EMAILED AND PASS WORNG",
            success: false

        })
          
        const JwtToken = jwt.sign({
         email :user.email ,_id : user._id
        },
        process.env.JWT_SECRET,
        {expiresIn:"24h"}
    
    )

    res.status(200)
    .json({
        message:"login success",
        success:true,
        JwtToken,
        email,
        name: user.name
    })
       

    } catch(err){

         res.status(500)
           .json({
            message:"Internal server error",
            success: false
})

    }
}



module.exports ={
    signup,
    login
}