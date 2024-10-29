import Category from "../category/categoryModel.js"
import Product from "./ProductModel.js"

const insertProduct = async (data) => {
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
const getAllProducts = async (data) => {
     const { foodCategory } = data;

     console.log(foodCategory)
     let query = {}
     
     if (foodCategory) {
          const category = await Category.findOne({ title: foodCategory.toLowerCase() })
          console.log(category)
          if (!category) {
             return []
               
          }
          query.foodCategory = category._id;
     }
     console.log(query)
     return await Product.find(query).populate({ path: "foodCategory", select: "title" })
}
const singleProduct = async (id) => {
     return await Product.findById(id)
}
const deleteProduct = async (id) => {
     return await Product.findByIdAndDelete(id)
}
const deleteAll = async () => {
     return await Product.deleteMany()
}
const updateProduct = async (id, data) => {
     const { foodName, foodCategory, foodImage, description } = data;
     return await Product.findByIdAndUpdate(id, { foodName, foodCategory, foodImage, description }, { new: true })
}
const ProductService = {
     insertProduct,
     getAllProducts,
     singleProduct,
     deleteProduct,
     updateProduct,
     deleteAll
}
export default ProductService