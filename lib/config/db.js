import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://KYO:09110913@cluster0.wc4rp.mongodb.net/blog-app')
    console.log("DB Connect");
}