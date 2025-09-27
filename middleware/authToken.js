const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtSecret = process.env.JWT_SECRET

const authToken = (req,res,next)=>{
  const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ','')
  console.log(token)

  if(!token){
    return res.status(401).json({"error":"No auth token found"})
  }
  try{
    const decoded = jwt.verify(token, jwtSecret)
    req.user = decoded
    next()
  }catch(err){
      console.error(err)
      return res.status(401).json({error: "Invalid token"})
  }
}
module.exports = authToken