import Apperror from "../error/AppError.js";

const globalErrorHandler = async(err,req,res,next) => {
     let message = "something went wrong"
     let statusCode = 500;
     let success = false;
     if(err instanceof Apperror ){
          console.log(err)
          message = err.message
          statusCode = err.status || 500
     } else if( err instanceof Error){
          message = err.message

     }
     res.status(statusCode).json({
          message: message,
          success:success
     })
   next();
};
export default  globalErrorHandler;