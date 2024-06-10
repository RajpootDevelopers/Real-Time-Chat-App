import express from "express"
import path from "path"
import { app, server } from "./socket/socket.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routs/auth.routes.js";
import messageRoutes from "./routs/message.routes.js";
import userRoutes from "./routs/user.routes.js";

import { connectToMongoDB } from "./db/connectToMongoDB.js"


dotenv.config();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);    
app.use("/api/messages", messageRoutes);    
app.use("/api/users", userRoutes);    

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// Rout Route : http://localhost:5000/
// app.get("/", (req, res)=>{
//     res.send("Welcome to Home Page!");
// })


server.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`server is listening on this port ${PORT}`)
});