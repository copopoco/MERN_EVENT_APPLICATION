import express from "express";
import dotenv from "dotenv"; 
// import messageRouter from "./messageRouter.js";
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data


// app.use("/api/messages", messageRouter);
app.get('/',(req,res) => {
    res.send("Hello Mr.")
})

export default app;
