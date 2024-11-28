import Apperror from "../error/AppError.js";
import jwt from "jsonwebtoken"
import User from "../module/user/UserModel.js";
 export const adminVerify = async (req,res,next)=>{
     try {
          const token = req.headers.authorization;
          if(!token){
               throw new Apperror(404,"token not found")
          }
          const decode = jwt.verify(token,"resturent123")
          console.log(decode)
          const isUserExist = await User.findById(decode?.UserId)
          if(!isUserExist){
               throw new Apperror(400,"user not exist")

          }
          else if (decode?.role !== "admin"){
               throw new Apperror(401,"you are not authorized")
          }
          next()
     } catch (error) {
          next(error)
     }
    
}
export const manyVerify = async (req,res,next) =>{
     try {
          const token = req.headers.authorization;
          if(!token){
               throw new Apperror(404,"token not found")
          }
          const decode = jwt.verify(token,"resturent123")
          console.log(decode)
          const isUserExist = await User.findById(decode?.UserId)
          if(!isUserExist) {
               throw new Apperror(400,"user not exist")
          }
          else if (decode?.role!== "admin" && decode?.role!== "customer"){
               throw new Apperror(401,"you are not authorized")
          }
          next()
     } catch (error) {
          next (error)
          
     }

}
 export const customerVerify = async (req,res,next)=>{
     try {
          const token = req.headers.authorization;
          if(!token){
               throw new Apperror(404,"token not found")
          }
          const decode = jwt.verify(token,"resturent123")
          console.log(decode)
          const isUserExist = await User.findById(decode?.UserId)
          if(!isUserExist){
               throw new Apperror(400,"user not exist")

          }
          else if (decode?.role !== "customer"){
               throw new Apperror(401,"you are not authorized")
          }
          next()
     } catch (error) {
          next(error)
     }
    
}