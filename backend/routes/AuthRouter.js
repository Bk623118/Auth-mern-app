const router = require("express").Router()
const { signup,login } = require("../Controllers/AuthController");
const {SignupValidation,LoginValidation} = require("../Middleware/AuthValidation")


router.post("/signup", SignupValidation,signup),
router.post("/login",LoginValidation,login)

module.exports = router;


