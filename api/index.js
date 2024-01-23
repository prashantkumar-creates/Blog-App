import { error } from 'console';
import express from 'express'
import mongoose from 'mongoose';
import Userrouter from './routes/user.route.js';
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongodb is connected ")
}).catch((error) =>{
    console.log("not able to connect mow");
})

app.listen(3000, () => {
    console.log("app is listnign on port 3000!!!!");
})

app.use('/api/auth',Userrouter);
app.use('/api/auth',authRoute);

app.use((err, req,res, next) => {
    const statuscode = err.statuscode
    const message = err.message
    res.status(statuscode).json({
        success:"false",
        statuscode,
        message,
    })
})