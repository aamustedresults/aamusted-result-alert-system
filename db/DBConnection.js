const mongoose=require('mongoose')


const MONGO_URL='mongodb://localhost:27017/Result?directConnection=true'


const db=mongoose.createConnection(MONGO_URL)




module.exports=db;