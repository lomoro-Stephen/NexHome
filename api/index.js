import express from 'express';

//creating an application
const app = express();

//list to the port number
app.listen(3000, () => {
    console.log("Be aware server is running.....");
})

