import ProductService from "./ProductService.js";

const insertProduct = async (req,res,next)=>{
     const data = req.body;
     console.log(data)
    try {
          const  result = await ProductService.insertProduct(data)
          res.status(200).json({message:"product inserted",result})
    } catch (error) {
     next(error)
     
    }
}
const deleteAll = async (req,res,next) =>{
     try {
          const result = await ProductService.deleteAll()
          res.status(200).json({message:"all products deleted successfully",result})
     } catch (error) {
          next(error)
          
     }
}
const getAllProducts = async (req,res,next) =>{
     const query = req.query
     console.log(query)
     try {
          const result = await ProductService.getAllProducts(query)
          res.status(200).json({message:"all products retrieved succesfull ",result})
     } catch (error) {
          next(error)
          
     }
}
const singleProduct = async(req,res,next) =>{
     try {
          const id = req.params.id
          const result = await ProductService.singleProduct(id)
          res.status(200).json({message:"single product retrieved succesfully", result})
     } catch (error) {
          next(error)
          
     }
}
const deleteProduct = async(req,res,next) =>{
     try {
          const id = req.params.id
          const result = await ProductService.deleteProduct(id)
          res.status(200).json({message:" product delete succesfully", result})
     } catch (error) {
          next(error)
          
     }
}
const updateProduct = async(req,res,next) =>{
     try {
          const id = req.params.id
          const data = req.body
          const result = await ProductService.updateProduct(id,data)
          res.status(200).json({message:"product update successfully",result})
     } catch (error) {
          next(error)
          
     }
}
const ProductController = {
     insertProduct,
     getAllProducts,
     singleProduct,
     deleteProduct,
     updateProduct,
     deleteAll
}
export default ProductController