import { model, Schema } from "mongoose"

const UserSchema = new Schema({
name:{type: String, require:[true,"name required"]},
email:{type: String, require:[true,"email required"]},
password:{type: String, require:[true,"password required"]},
image:{type: String},
role:{ type: String , enum:["user","admin"],default:"user"},
},{
     timestamps:true
})
const User = model("User", UserSchema)
export default User;