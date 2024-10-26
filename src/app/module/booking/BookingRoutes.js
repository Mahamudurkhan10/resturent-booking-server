import express from "express"
import BookingController from "./BookingController.js"
import { adminVerify, customerVerify } from "../../middleware/auth.js"
const router = express.Router()
router.post('/booking', BookingController.CreateBooking)
router.get('/booking', BookingController.getAllBooking)
router.get('/mybooking/:id',customerVerify, BookingController.myBooking)
router.delete('/booking/:id',adminVerify, BookingController.myBooking)
router.patch('/booking/:id',customerVerify,BookingController.updateBooking)
router.get('/singlebooking/:id',adminVerify,customerVerify, BookingController.singleBooking)
const BookingRoutes = router
export default BookingRoutes