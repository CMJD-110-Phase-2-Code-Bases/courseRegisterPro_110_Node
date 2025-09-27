const courseMaterialURL = "/material"
const express = require('express')
const router = express.Router()



// get CM
router.get(courseMaterialURL,(req,res)=>{
   res.send("CM Routes")
})

// // save CM
// router.post(courseMaterialURL, courseMat,(req,res)=>{
    
// })
// // update CM
// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })
// // delete CM
// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })

module.exports = router

