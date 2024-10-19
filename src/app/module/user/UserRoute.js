import express from "express";
import userController from "./UserController.js";
const router = express.Router()
router.get('/users',userController.getAllUsers)
router.post('/users',userController.signup)
router.patch('/user/:id',userController.updateAUser)


const userRoutes = router
export default userRoutes;