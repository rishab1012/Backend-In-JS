import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path:'./env'
})


connectDB()
.then(
    () => {
       app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
       }) 
    }
)
.catch(
    (error) =>{
      console.log(`MongoDB connection failed!!`,error);
    }
)












/*

import express from "express"
const app = express()

;( async ()=>{
       try {
           mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error:",error);
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listing on port ${process.env.PORT}`);
        })

       } catch (error) {
          console(`Error:`,error)
       }
})()

*/