import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to db successfully')
}).catch((err) => {
    console.log(err)
});

//creating an application
const app = express();

//list to the port number
app.listen(3000, () => {
    console.log("Be aware server is running.....");
})

