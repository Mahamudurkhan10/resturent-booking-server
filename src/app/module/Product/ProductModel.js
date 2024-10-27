import mongoose, { model, Schema } from "mongoose";
const ProductShema = new Schema({
     foodName: { type: String, require: [true, "foodName is required"] },
     foodCategory: {
          type: Schema.Types.ObjectId,
          ref:'Categories',
          require: [true, "foodCategory is required"]
     },
     description: { type: String, require: [true,"description is required"] },
     price: { type: Number, require: [true, "price is required"] },
     foodImage: { type: String, },
})
const Product = model("Product", ProductShema)
export default Product