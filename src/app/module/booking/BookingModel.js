import { model, Schema } from "mongoose";

const BookingSchema = new Schema ({
         customer: {
          type: Schema.Types.ObjectId,
          ref : "User",
          required: [true, "customer is required"]
         },
         date: {
          type : String,
          required : [true, "date is required"]
         },
         time:{
          type:String,
          required : [true,"time is required"]

         },
         person: {
          type: Number,
          required: [true, "person is required"],
          max: 10
         },

},{
     timestamps: true
})
const Booking = model("Booking", BookingSchema)
export default Booking;