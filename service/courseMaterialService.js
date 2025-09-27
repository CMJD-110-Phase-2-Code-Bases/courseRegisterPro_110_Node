const CourseMaterial  = require("../model/courseMaterialModel")
//getAll

async function getAllCourseMaterials(){
   return CourseMaterial.find();
}

// save

async function addCourseMaterial(newMaterial){
   new CourseMaterial(newMaterial).save();
}
//delete
async function deleteCourseMaterial(){


}
//update
async function updateCoureMaterial(materialId, updateData){
   return CourseMaterial.findOneAndUpdate({materialId: materialId},updateData,{ new: true})
}

module.exports = { getAllCourseMaterials, addCourseMaterial, updateCoureMaterial,deleteCourseMaterial }