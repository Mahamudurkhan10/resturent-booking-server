import express from 'express'
import tableController from './tableController.js'
const router = express.Router()
router.post('/table',tableController.insertTable)
router.get('/table',tableController.getTable)
const tableRoutes = router
export default tableRoutes