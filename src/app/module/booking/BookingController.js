import BookingService from "./BookingService.js"

const CreateBooking = async (req,res,next) =>{
     try {
         const result = await  BookingService.CreateBooking(req.body)
         res.status(200).json({message: "Booking created successfully", result})
     } catch (error) {
          next(error)
          
     }
}
const getAllBooking = async (req,res,next) =>{
     try {
          const result = await BookingService.getAllBooking()
          res.status(200).json({message:'all bookings retrieved successfully', result})
     } catch (error) {
          next(error)
          
     }
}
const myBooking = async (req,res,next)=>{
     try {
          const result = await BookingService.myBooking(req.params.id)
          res.status(200).json({message:'my bookings retrieved successfully',result})
     } catch (error) {
          next(error)
          
     }
}
const updateBooking = async (req,res,next) =>{
     try {
          const result = await BookingService.updateBooking(req.params.id,req.body)
          res.status(200).json({message:"booking updated successfully",result})
     } catch (error) {
          next (error)
          
     }
}
const deleteBooking = async (req,res,next) =>{
     try {
          const result = await BookingService.deleteBooking(req.params.id)
          res.status(200).json({message:"booking deleted successfully",result})
     } catch (error) {
          next(error)
          
     }
}
const singleBooking = async (req,res,next) =>{
     try {
          const result = await BookingService.singleBooking(req.params.id)
          res.status(200).json({message:'single booking retrieved successfully',result})
     } catch (error) {
          next(error)
          
     }
}
const BookingController = {
     CreateBooking,
     getAllBooking,
     myBooking,
     updateBooking,
     singleBooking
}
export default BookingController;