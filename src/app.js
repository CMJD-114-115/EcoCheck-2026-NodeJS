const express = require("express")
const app  = express()
const PORT  = 3500
const userRoutes = require("./routes/userRoutes")

// User ---> userRoutes
// Climate actions ----> climateActionRoutes

app.get("/",(req,res)=>{
   res.send("Hello EcoCheck-2026 | CMJD -114/115")
})
app.use("/ecocheck/api/v1",userRoutes)

app.listen(PORT,()=>{
    console.log("EcoCheck-2026 Running");
    
})