import express from "express";
import userController from "./UserController.js";
const router = express.Router()
router.get('/users',userController.getAllUsers)
router.post('/users',userController.signup)
router.post('/users/signIn',userController.SignIn)
router.patch('/user/:id',userController.updateAUser)
router.delete('/user/delete',userController.deleteMany)
router.delete('/user/:id',userController.DeleteAUser)


const userRoutes = router
export default userRoutes;