import categoryService from "./categoryService.js"

const createCategory = async (req,res,next)=> {
   try {
         const result =  await categoryService.createCategory(req.body)
         res.status(200).json({message:'category create successfully',result})
   } catch (error) {
     next(error)
     
   }
}
const singleCategory = async(req,res,next) =>{
     try {
          const result = await categoryService.singleCategory(req.params.id)
          res.status(200).json({message:'single category found', result})
     } catch (error) {
          next (error)
          
     }
}
const getAllCategory = async(req,res,next) =>{
     try {
          const result = await categoryService.getAllCategory()
          res.status(200).json({message:'all categories retrieved successfully',result})
     } catch (error) {
          next(error)
          
     }
}
const deleteCategory = async(req,res,next) =>{
     try {
         const result = await categoryService.deleteCategory(req.params.id) 
         res.status(200).json({message:'category deleted successfully',result})
     } catch (error) {
          next(error)
          
     }
}
const updateCategory = async(req,res,next) =>{
     try {
         const result = await categoryService.updateCategory(req.params.id,req.body) 
         res.status(200).json({message:'category updated successfully',result})
     } catch (error) {
          next(error)
          
     }
}
const categoryController = {
     createCategory,
     singleCategory,
     getAllCategory,
     deleteCategory,
     updateCategory
}
export default categoryController