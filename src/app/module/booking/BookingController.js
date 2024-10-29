import BookingService from "./BookingService.js"

const insertBooking = async (req,res,next) =>{
     try {
          const result = await BookingService.insertBooking(req.body)
          res.status(200).json({message:"insert booking successfully",result})
     } catch (error) {
          next(error)
          
     }
}
export const BookingController = {
     insertBooking
}