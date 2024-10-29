import Apperror from "../../error/AppError.js"
import { Table } from "../Table/tableModel.js"
import { Booking } from "./BookingModel.js"

const insertBooking = async (data) =>{
     const findTable = await Table.findOne({person:{ $gte: data.person}})
     if(!findTable){
          throw new Apperror(404,"not found")
     }
     const result = await Booking.create(data)     
     return result 

}

const BookingService = {
     insertBooking
}
export default BookingService