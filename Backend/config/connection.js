import mongoose from 'mongoose';

const db = "mongodb://localhost:27017/ReduxPractice";

export const connection = async () =>{
    try {
        await mongoose.connect(db, {
            useNewUrlParser:true})
            console.log("mongo connected")
        }
        
    
    catch (error) {
        
    }
}