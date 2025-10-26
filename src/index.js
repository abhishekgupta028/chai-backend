// require("dotenv").config({path: './.env'});
import dotenv from "dotenv";
import {} from "dotenv/config";
import connectDB from "./db/index.js";

dotenv.config({ 
    path: "./.env" 
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err => {
    console.log("MongoDB connection failed !!! ", err)
}));







/** * Express server setup in index.js file

import express from "express";
const app = express();
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.error("Express server error", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
})() */
