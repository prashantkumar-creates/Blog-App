import { error } from 'console';
import express from 'express'
import mongoose from 'mongoose';
import Userrouter from './routes/user.route.js';
import dotenv from 'dotenv'


dotenv.config();


const app = express();
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongodb is connected ")
}).catch((error) =>{
    console.log(error);
})

app.listen(3000, () => {
    console.log("app is listnign on port 3000!!!!");
})

app.use('/api/user',Userrouter)