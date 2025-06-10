const mongoose = require("mongoose");
const db_url = process.env.DB_URL;
require("dotenv").config()


mongoose.connect(db_url)
.then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
console.log("mongodb connection error ",err)
})
