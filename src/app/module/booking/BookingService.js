import Booking from "./BookingModel.js"

const CreateBooking = async (data) =>{
   
          const result = await Booking.create(data)
          return result
    
}

const getAllBooking = async () =>{
     return await Booking.find().populate({path:"customer", select:"name email "})
}
const BookingService = {
     CreateBooking,
     getAllBooking
}
export default BookingService