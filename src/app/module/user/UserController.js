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
const SignIn = async(req,res,next) =>{
     try {
          const result = await UserServices.SignIn(req.body)
          const {password,...others} = result?.data.toObject()
          res.status(200).json({message:"user SignIn succesfully",
               success:true, data:others, token: result?.token
          })
     } catch (error) {
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
const deleteMany = async (req,res,next) =>{
     try {
          const result = await UserServices.deleteMany()
          res.status(200).json( {message: "all users deleted successfully", success:true, result})
     } catch (error) {
          next()
          
     }
}

const userController = {
     signup,
     getAllUsers,
     updateAUser,
     DeleteAUser,
     SignIn,
     deleteMany
}
export default userController