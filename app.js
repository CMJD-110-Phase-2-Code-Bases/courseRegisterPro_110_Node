const express = require("express")
const app = express()
const PORT = 3500
const contextPathWithAPIVersion = "/courseregis/api/v1"
const courseMaterialRoutes = require("./routes/courseMaterialRoutes")


app.get(`${contextPathWithAPIVersion}/heartbeat`,(req,res)=>{
    res.send("Course Regis Pro is running")
})
app.use(contextPathWithAPIVersion,courseMaterialRoutes)

app.listen(PORT,()=>{
    console.log("Server started in PORT: ",PORT)
});



