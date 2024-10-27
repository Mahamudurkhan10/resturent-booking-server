import express from "express"
import cors from "cors"
import userRoutes from "./app/module/user/UserRoute.js"
import ProductRouter from "./app/module/Product/ProductRoute.js"
import globalErrorHandler from "./app/middleware/globalErrorHandler.js"
import categoryRoutes from "./app/module/category/categoryRoutes.js"
import BookingRoutes from "./app/module/booking/BookingRoutes.js"
const app = express()
app.use(express.json())
app.use(cors(
     {
          origin:"http://localhost:5173"
     }
))
app.get('/',(req,res)=>{
     res.send("server is running")
})
app.use('/api',userRoutes)
app.use('/api',ProductRouter)
app.use('/api',categoryRoutes)
app.use('/api',BookingRoutes)
app.use(globalErrorHandler)
export default app 