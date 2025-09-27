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
// update CM
router.patch(`${courseMaterialURL}/:materialId` ,upload.single("material") ,async (req,res)=>{
    console.log('Call update material')
    const { materialId } = req.params;
    console.log("Mat Id",materialId)
    
    if(!materialId){
        return res.status(400).json({error : "Material ID is required"})
    }

    const updateData = {
        ...(req.body.fileName && { fileName: req.body.fileName}),
        ...(req.body.courseId && { courseId: req.body.courseId}),
        ...(req.body.materialType && { materialType: req.body.materialType}),
        ...(req.file && { material: req.file.buffer.toString("base64")}),
    }

    const updatedMat = await courseMaterialService.updateCoureMaterial(materialId, updateData)
    if(!updatedMat){
        return res.status(400).json({error: "Material Not found"});
    }
        return res.status(204).send();






})
// // delete CM
// router.delete(`${courseMaterialURL}/:materialId`,(req,res)=>{
    
// })

module.exports = router

