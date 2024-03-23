import express from "express";
import { dbConnection } from "./BACKEND/database/dbConnection.js";
import dotenv from "dotenv"; 
import messageRouter from "./BACKEND/router/messageRouter.js";
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data

dbConnection();

app.use("/api/messages", messageRouter);
export default app;
