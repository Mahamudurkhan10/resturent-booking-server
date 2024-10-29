import { Table } from "./tableModel.js"

const insertTable = async(data) =>{
     const result = await Table.create(data)
     return result
}
const getTable = async() =>{
   return await Table.find()
}
const tableService = {
     insertTable,
     getTable
}
export default tableService