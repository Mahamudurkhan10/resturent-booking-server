import Product from "./ProductModel.js"

const insertProduct = async (data) =>{
 try {
     const newData = new Product({
       ...data
     })
     const result = await newData.save()
     return result
 } catch (error) {
     throw new Error("something wrong", error)
 }
}
const getAllProducts= async () =>{
     return await Product.find()
}
const singleProduct = async (id) =>{
     return await Product.findById(id)
}
const deleteProduct = async (id) =>{
     return await Product.findByIdAndDelete(id)
}
const updateProduct = async (id,data) =>{
     const {foodName,foodCategory,foodImage,description } = data;
     return await Product.findByIdAndUpdate(id,{foodName,foodCategory,foodImage,description},{new:true})
} 
const ProductService = {
     insertProduct,
     getAllProducts,
     singleProduct,
     deleteProduct,
     updateProduct
}
export default ProductService