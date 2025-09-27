const courseMaterialURL = "/material"
const express = require('express')
const router = express.Router()
const courseMaterialService = require("../service/courseMaterialService")
const multer = require("multer")
const CourseMaterial = require("../model/courseMaterialModel")
const { v4: uuidv4} = require("uuid")

//config multer related storage
const storage = multer.memoryStorage()
const upload = multer({storage: storage})



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
router.post(courseMaterialURL, upload.single("material"), async (req,res)=>{
    try{
       console.log("Call save material......") 
       console.log("Req body",req.body)         
       console.log("File",req.file)      
       
       if(!req.body.fileName || !req.body.materialType ||!req.body.courseId || !req.file){
           return res.status(400).json({error: "Required data not include"});
       }
       const fileBase64 = req.file.buffer.toString("base64")

       const newMaterial = new CourseMaterial({
            materialId: "CMT-"+ uuidv4(),
            fileName: req.body.fileName,
            materialType: req.body.materialType,
            material: fileBase64,
            courseId: req.body.courseId
       });

       await courseMaterialService.addCourseMaterial(newMaterial)
       res.status(201).json({message: "Saved material"})

    }catch(err){
        console.error("Save error "+err)
        res.status(500).json({ error: "Saved failed"})
    }
    
})
// // update CM
// router.patch(`${courseMaterialURL}/:materialId`,courseMat,(req,res)=>{
    
// })
// // delete CM
// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })

module.exports = router

