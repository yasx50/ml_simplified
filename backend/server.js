import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})


import express from 'express'
import cors from 'cors'
import {connectDB} from './database/Database_Connection.js'
const app = express()
app.use(express.json())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
import StudentRouter from './apis/Students_Routes.js'
app.use("/api/v1/",StudentRouter)

connectDB().then(()=>{
    console.log("database connected successfully !!!")
    app.listen(process.env.PORT || 3000,()=>{
        console.log('the app is listining at port ',process.env.PORT);
        
    })
}).catch((err)=>{
    console.log("database not connected :( ",err)
})