import Booking from "./BookingModel.js"

const CreateBooking = async (data) =>{
   
          const result = await Booking.create(data)
          return result
    
}

const getAllBooking = async () =>{
     return await Booking.find().populate({path:"customer", select:"name email "})
}
const myBooking = async(id) => {
     
     const result = await Booking.find({customer:id})
     console.log(result)
     return result
}
const updateBooking = async (id,data) =>{
     const result = await Booking.findByIdAndUpdate(id,{...data},{new:true})
     return result
}
const deleteBooking = async (id) =>{
     return await Booking.findByIdAndDelete(id)
}
const singleBooking = async (id) =>{
     return await Booking.findById(id)
}
const BookingService = {
     CreateBooking,
     getAllBooking,
     myBooking,
     updateBooking,
     deleteBooking,
     singleBooking
}
export default BookingService