import mongoose  from "mongoose";

const dbConnection = async ()=>{
    mongoose
    .connect( String(process.env.MONGODB_URI) )
    .then(()=> {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
    })    
};

export default dbConnection