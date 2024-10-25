import express from "express"
import BookingController from "./BookingController.js"
const router = express.Router()
router.post('/booking', BookingController.CreateBooking)
router.get('/booking', BookingController.getAllBooking)
const BookingRoutes = router
export default BookingRoutes