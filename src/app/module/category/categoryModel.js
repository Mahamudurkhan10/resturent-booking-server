import { model, Schema } from "mongoose"

const categorySchema = new Schema({
title:{type: String, require:[true,"category required"]},

},{
     timestamps:true
})
const Category = model("Categories", categorySchema) 
export default Category;