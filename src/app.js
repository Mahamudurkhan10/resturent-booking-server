import express from "express"
import userRoutes from "./app/module/user/UserRoute.js"
import ProductRouter from "./app/module/Product/ProductRoute.js"
import globalErrorHandler from "./app/middleware/globalErrorHandler.js"
import categoryRoutes from "./app/module/category/categoryRoutes.js"
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
     res.send("server is running")
})
app.use('/api',userRoutes)
app.use('/api',ProductRouter)
app.use('/api',categoryRoutes)
app.use(globalErrorHandler)
export default app 