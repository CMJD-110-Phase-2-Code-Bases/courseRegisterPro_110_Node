const courseMaterialURL = "/material"
const express = require('express')
const router = express.Router()
const courseMaterialService = require("../service/courseMaterialService")



// get CM
router.get(courseMaterialURL, async (req,res)=>{
   try{
       const allMaterials = await courseMaterialService.getAllCourseMaterials()
       return res.json(allMaterials)
   }catch(err){
        console.error("Error fetching materials ",err)
        return res.status(500).json({error:"Failed to fetch data"})
   }
})

// save CM
router.post(courseMaterialURL, courseMat,(req,res)=>{
    
    
})
// // update CM
// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })
// // delete CM
// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })

module.exports = router

