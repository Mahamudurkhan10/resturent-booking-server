import mongoose from "mongoose";


const tableSchema = new mongoose.Schema({
     person : {
          type: Number,
          required:[true,"person is required"],
          max:12,

     }

},{
     timestamps:true
})
export const Table = mongoose.model('Table',tableSchema)