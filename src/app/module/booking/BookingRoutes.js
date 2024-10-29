import express from "express"
import { BookingController } from "./BookingController.js"
const router = express.Router()
router.post('/booking',BookingController.insertBooking)
const BookingRoutes = router
export default BookingRoutes