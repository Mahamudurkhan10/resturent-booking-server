import Apperror from "../../error/AppError.js"
import User from "./UserModel.js"
import bcryipt from "bcrypt"
import jwt from "jsonwebtoken"
const signup = async (data)=>{
     const {password,email} = data
      const ExistUser = await User.findOne({email:email})
      if(ExistUser){
          return {message:"user already exist"}
      }
     const hashedPassword = await bcryipt.hash(password,12)
      const newUser = new User({
          ...data, password:hashedPassword
      })
     
      const result = await newUser.save()
      return result
} 
const SignIn = async (data) =>{
     const isUserExist = await User.findOne({email: data?.email})
     if(!isUserExist){
          throw new Apperror(404,"user not found")
     }
     const isPasswordMatch = await bcryipt.compare(data?.password,isUserExist?.password)
     if(!isPasswordMatch){
          throw new Apperror(401,"forbidden password")
     }
     const userdata = {
          email: isUserExist?.email,
          role: isUserExist?.role,
          UserId: isUserExist?._id
     }
     const token = jwt.sign(userdata,'resturent123',{expiresIn:"7d"})
     return{
          data:isUserExist,
          token
     }
}
const getAllUsers = async () =>{
     return await User.find()
}
const updateAUser = async (id,data)=>{
     const {name,role} = data;
     const result = await User.findByIdAndUpdate(id,{name,role}, {new:true})
     return result
}
const DeleteAUser = async (id) =>{
     const result = await User.findByIdAndDelete(id)
     return result
}
const deleteMany = async () =>{
     const result = await User.deleteMany()
     return result
}
const UserServices = {
     signup,
     getAllUsers,
     updateAUser,
     DeleteAUser,
     SignIn,
     deleteMany

}

export default UserServices;