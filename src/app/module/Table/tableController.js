import tableService from "./tableService.js"

const insertTable = async (req,res,next) =>{
     try {
         const result = await  tableService.insertTable(req.body)
         res.status(200).json({message:"insert table successfully",result})
     } catch (error) {
          next(error)
          
     }
}
const getTable = async (req,res,next) =>{ 
     try {
          const result = await tableService.getTable()
          res.status(200).json({message:"insert table successfully",result})
     } catch (error) {
          next(error)
          
     }
}
const tableController = {
     insertTable,
     getTable
}
export default tableController