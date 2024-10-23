import Category from "./categoryModel.js"

const createCategory = async(data)=>{
     
     try {
          const newData = new Category({
               ...data
          })
          const result = await newData.save()
          // const result = await Category.create(data)
          return result
     } catch (error) {
          throw new Error('')
          
     }
}
const singleCategory = async(id) =>{
     try {
          return await Category.findById(id)
     } catch (error) {
          throw new Error('')
     }
     
}
const getAllCategory = async() =>{
     try {
          return await Category.find()
     } catch (error) {
          throw new Error('')
     } 
     
}
const deleteCategory = async (id) =>{
     return await Category.findByIdAndDelete(id)   
}
const updateCategory = async (id,data) =>{
     const {title } = data;
     return await Category.findByIdAndUpdate(id,{title},{new:true})
} 
const categoryService = {
     createCategory,
     singleCategory,
     getAllCategory,
     deleteCategory,
     updateCategory
}
export default categoryService