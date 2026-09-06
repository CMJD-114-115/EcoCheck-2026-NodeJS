const express = require("express")
const app  = express()
require("dotenv").config()
const PORT  = process.env.PORT || 3600
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const mongoose = require("mongoose")
const cors = require("cors")

// User ---> userRoutes
// Climate actions ----> climateActionRoutes
app.use(express.json())
// Add CORS config

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","PUT","PATCH","DELETE","UPDATE"],
    allowedHeaders: ["Content-Type","Authorization"],
    credentials: true
}))

app.get("/",(req,res)=>{
   res.send("Hello EcoCheck-2026 | CMJD -114/115")
})
app.use("/ecocheck/api/v1", userRoutes)
app.use("/ecocheck/api/v1", authRoutes)

// DB connection with Mongo DB

mongoose.connect("mongodb://localhost:27017/ecoChk-2026-CMJD")
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.error("Failed to connect mongoDB",err)
})
app.listen(PORT,()=>{
    console.log("EcoCheck-2026 Running with the PORT: ",PORT);
    
})