import  express from 'express'
import categoryController from './categoryController.js'
import { adminVerify } from '../../middleware/auth.js'
const router = express.Router()
router.post('/category',categoryController.createCategory)
router.get('/categories',categoryController.getAllCategory) 
router.get('/category/:id',categoryController.singleCategory)
router.delete('/category/:id', adminVerify, categoryController.deleteCategory)
router.patch('/updateCategory/:id', adminVerify, categoryController.updateCategory)
const categoryRoutes = router
export default categoryRoutes