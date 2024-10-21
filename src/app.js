import express from "express"
import userRoutes from "./app/module/user/UserRoute.js"
import ProductRouter from "./app/module/Product/ProductRoute.js"
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
     res.send("server is running")
})
app.use('/api',userRoutes)
app.use('/api',ProductRouter)
export default app 