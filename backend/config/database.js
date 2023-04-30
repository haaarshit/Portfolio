import mongoose from "mongoose";

export const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((data)=>{
        console.log(`MongoDB connected to : ${data.connection.host}`)
    })
}