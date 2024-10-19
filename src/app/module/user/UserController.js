import UserServices from "./UserService.js"

const signup = async (req,res,next) =>{
     console.log(req.body)
     try {
          const result = await UserServices.signup(req.body)
          res.status(200).json({message:"user signUp ",result})
     } catch (error) {
          console.log(error)
          next(error)
          
     }
}
const updateAUser = async (req,res,next) =>{
     const id = req.params.id
     const data = req.body
     
     try {
          const result = await UserServices.updateAUser(id,data)
          res.status(200).json({message:"user updated ",result})
     } catch (error) {
          console.log(error)
          next(error)
          
     }
}
const DeleteAUser = async (req,res,next) =>{
     const id = req.params.id
    console.log(id)
     
     try {
          const result = await UserServices.DeleteAUser(id)
          res.status(200).json({message:"user deleted ",result})
     } catch (error) {
          console.log(error)
          next(error)
          
     }
}
const getAllUsers = async (req,res,next) =>{
     try {
          const result = await UserServices.getAllUsers();
          res.status(200).json({message:"all users retrieved successfully", success:true, result})
     } catch (error) {
          next(error)
          
     }
}

const userController = {
     signup,
     getAllUsers,
     updateAUser,
     DeleteAUser
}
export default userController