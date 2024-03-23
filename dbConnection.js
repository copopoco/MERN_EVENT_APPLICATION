import mongoose  from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect( 
                        //"mongodb+srv://tushar_sajwan:tushar_sajwan@cluster0.yk09smk.mongodb.net/?retryWrites=true",
        process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE"}
        { dbName: "MERN_STACK_EVENT_MESSAGE"}
        )
    .then(()=> {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
    })

    
};