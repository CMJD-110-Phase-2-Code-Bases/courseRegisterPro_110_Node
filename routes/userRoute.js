const authUrl = "/auth"
const express = require('express')
const router = express.Router()
const userService = require("../service/userService")
const CourseMaterial = require("../model/userModel")
const { v4: uuidv4 } = require("uuid")


//Sign in
router.post(`${authUrl}/signin`,async (req,res)=>{
    try{
    




    }catch(err){
        console.err("Loging error",err);
        res.status(500).json({"error":"Loging fail with internal error"})
    }
})

//Sign up
router.post(`${authUrl}/signup`,async (req,res)=>{
    const { firstName, lastName,email,password,role} = req.body
    if(!firstName || !lastName || !email || !password || !role){
        res.status(400).json({"error":"Missing required input fileds"})
    }
    try{
    




    }catch(err){
        console.err("Loging error",err);
        res.status(500).json({"error":"Loging fail with internal error"})
    }
})