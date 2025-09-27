const express = require("express")
const app = express()
const PORT = 3500
const contextPathWithAPIVersion = "/courseregis/api/v1"

app.get(`${contextPathWithAPIVersion}/heartbeat`,(req,res)=>{
    res.send("Course Regis Pro is running")
})

app.listen(PORT,()=>{
    console.log("Server started in PORT: ",PORT)
});



