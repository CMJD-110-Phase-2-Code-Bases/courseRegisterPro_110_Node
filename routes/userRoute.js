const authUrl = "/auth"
const express = require('express')
const router = express.Router()
const userService = require("../service/userService")
const User = require("../model/userModel")
const { v4: uuidv4 } = require("uuid")
const jwt = require("jsonwebtoken")
require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET

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
       const createdUser = userService.addUser(req.body);
       const token = jwt.sign({ userId: user.email},jwtSecret, { expiresIn: '1h'})
       res.status(201).json({token: token})

    }catch(err){
        console.err("Loging error",err);
        res.status(500).json({"error":"Loging fail with internal error"})
    }
})