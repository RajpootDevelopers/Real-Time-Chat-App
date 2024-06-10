import mongoose from "mongoose";
export const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to mongoDB")
    }catch(error){
        console.log("Error Connecting to mongodb. ", error.message)
    }
}