import express from "express";
import ProductController from "./ProductController.js";
import { adminVerify, customerVerify } from "../../middleware/auth.js";
const router = express.Router()

router.post('/products',ProductController.insertProduct)
router.get('/products',ProductController.getAllProducts)
router.get('/product/:id',ProductController.singleProduct)
router.delete('/product/:id', customerVerify, ProductController.deleteProduct)
router.patch('/product/:id',ProductController.updateProduct)
const ProductRouter = router
export default  ProductRouter