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

const PORT = 3001;
//listen to the port number
app.listen(PORT, () => {
    console.log(`Be aware server is running on port:${PORT}`);
})

