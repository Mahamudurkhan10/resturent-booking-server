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
const BookingController = {
     CreateBooking,
     getAllBooking
}
export default BookingController;