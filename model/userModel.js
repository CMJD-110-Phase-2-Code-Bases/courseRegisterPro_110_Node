const mongoose = require("mongoose")
const { replaceOne } = require("./courseMaterialModel")

const userSchema = new mongoose.Schema({
    userId: {type:String, required: true, unique:true},
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true, unique:true},
    password: {type:String, required: true},
    role: {type:String, required: true}
});

module.exports = mongoose.model("user",userSchema)