const express = require("express")
const app = express()
const contextPathWithAPIVersion = "/courseregis/api/v1"
const courseMaterialRoutes = require("./routes/courseMaterialRoutes")
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require("cors")

const PORT = process.env.PORT || 3500
app.use(express.json())

//handle CORS
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET','POST','PATCH','PUT','DELETE','OPTION'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
}
))

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



