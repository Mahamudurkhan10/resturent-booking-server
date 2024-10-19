import express from "express"
import userRoutes from "./app/module/user/UserRoute.js"
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
     res.send("server is running")
})
app.use('/api',userRoutes)
export default app