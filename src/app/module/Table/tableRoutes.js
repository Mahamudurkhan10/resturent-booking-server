import express from 'express'
import tableController from './tableController.js'
import { adminVerify, customerVerify, manyVerify } from '../../middleware/auth.js'
const router = express.Router()
router.post('/table',manyVerify, tableController.insertTable)
router.get('/table',tableController.getTable)
const tableRoutes = router
export default tableRoutes