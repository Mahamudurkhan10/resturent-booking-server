import mongoose from "mongoose";
import app from "./app.js";
const port = process.env.PORT || 5000;
const main = async () =>{
     const uri = "mongodb+srv://resturent-booking:wsC98ZdRJsjWxioy@atlascluster.6gwdl3v.mongodb.net/resturent-booking?retryWrites=true&w=majority&appName=AtlasCluster";
     try {
          await mongoose.connect("mongodb://localhost:27017/resturent")
          console.log("mongodb connect succesfully")
          app.listen(port, ()=>{
               console.log(`server is runnig on port ${port}`)
          })
          
     } catch (error) {
          console.log(error)  
          
     }
}
main()
