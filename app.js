const express = require("express")
const app = express()
const PORT = 3600
const contextPathWithAPIVersion = "/courseregis/api/v1"
const courseMaterialRoutes = require("./routes/courseMaterialRoutes")
const mongoose = require("mongoose")

app.use(contextPathWithAPIVersion,courseMaterialRoutes)
app.get(`${contextPathWithAPIVersion}/heartbeat`,(req,res)=>{
    res.send("Course Regis Pro is running")
})


//DB Connection
mongoose.connect("mongodb://localhost:27017/courseRegis110Pro",{useNewUrlParser:true , useUnifiedTopology: true})
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err=> console.error("Failed to connect mongoDB", err))

app.listen(PORT,()=>{
    console.log("Server started in PORT: ",PORT)
});



