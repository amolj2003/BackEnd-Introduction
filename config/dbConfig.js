const mongoose =require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error",()=>{
    console.log("Error connecting to database");
})

connection.on("connected",()=>{
    console.log("Mongo DB connected");
})

module.exports = connection;