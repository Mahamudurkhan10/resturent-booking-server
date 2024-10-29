import mongoose, { Schema } from "mongoose";
const BookingSchema = new mongoose.Schema({
     person : {
          type: Number,
          required : [true,"person is required"],
          max : 12
     },
     time: { 
          type: String,
          required: [true,"time is required"],

     },
     date : {
          type: String,
          required: [true,"date is required"]
     }
},{
     timestamps: true
})
export const Booking = mongoose.model("Booking", BookingSchema)