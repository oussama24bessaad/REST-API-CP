const mongoose = require("mongoose");
const connectDB=async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("***database is connected")
}catch (error) {
    console.log("database is not connected",error)
}};
module.exports = connectDB;