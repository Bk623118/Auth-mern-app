const express = require("express");
const app = express(); 
const bodyParser =require("body-parser");
const cors = require("cors");
const AuthRouter = require("/media/bunty/Bunty/bunty/Auth-mern-app/backend/routes/AuthRouter")
const ProductRouter = require ("/media/bunty/Bunty/bunty/Auth-mern-app/backend/routes/ProductRouter")

require("dotenv").config();
require("./Models/db")

const Port = process.env.Port||8080;

app.get("/ping" ,(req,res)=>{
res.send("pong")
} );

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);



app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
})