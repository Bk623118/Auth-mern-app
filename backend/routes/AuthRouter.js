const router = require("express").Router()
const { signup,login } = require("../Controllers/AuthController");
const {SignupValidation,LoginValidation} = require("/media/bunty/Bunty/bunty/Auth-mern-app/backend/Middleware/AuthValidation")


router.post("/signup", SignupValidation,signup),
router.post("/login",LoginValidation,login)

module.exports = router;


