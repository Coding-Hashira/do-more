import mongoose from "mongoose";

const connectToMongo = async ()=>{
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('Database Connected')
}

export default connectToMongo