import User from "./UserModel.js"
import bcryipt from "bcrypt"

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
const getAllUsers = async () =>{
     return await User.find()
}
const updateAUser = async (id,data)=>{
     const {name,role} = data;
     const result = await User.findByIdAndUpdate(id,{name,role}, {new:true})
     return result
}
const UserServices = {
     signup,
     getAllUsers,
     updateAUser

}
export default UserServices;