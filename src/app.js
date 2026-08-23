const express = require("express")
const app  = express()
const PORT  = 3500

app.get("/",(req,res)=>{
   res.send("Hello EcoCheck-2026 | CMJD -114/115")
})

app.listen(PORT,()=>{
    console.log("EcoCheck-2026 Running");
    
})