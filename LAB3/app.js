const express = require("express");
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');
const postRoutes = require('./Routes/post');
const  dotenv = require('dotenv');
dotenv.config()

const app = express();


app.use(express.json());
app.use('/auth', authRoutes);
app.use('/post',postRoutes);


const MONGODB_URI=process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000 ;

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Connected to MongoDb')
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database:',err)
});