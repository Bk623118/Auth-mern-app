const express = require("express");
const app = express(); 
const bodyParser =require("body-parser");
const cors = require("cors");
const AuthRouter = require("../backend/routes/AuthRouter")
const ProductRouter = require ("../backend/routes/ProductRouter")

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