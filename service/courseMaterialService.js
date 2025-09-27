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
async function updateCoureMaterial(){

}

module.exports = { getAllCourseMaterials, addCourseMaterial, updateCoureMaterial,deleteCourseMaterial }