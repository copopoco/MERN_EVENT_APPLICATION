import mongoose  from "mongoose";

const dbConnection = async ()=>{
    mongoose
    .connect("mongodb+srv://tushar_sajwan:tushar_sajwan@cluster0.yk09smk.mongodb.net/MERN_STACK_EVENT_MESSAGE" )
    .then(()=> {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
    })    
};

export default dbConnection