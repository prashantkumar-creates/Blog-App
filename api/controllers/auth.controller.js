import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === "" || password === "") {
   
      next(errorHandler(400,"all field are require"));
    }
    const saltRounds = 10;
    const hashedPassword = bcryptjs.hashSync(password, saltRounds);
    

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });
    console.log(newUser)

    try {
        await newUser.save();
        res.json({ message: "signup successfully" })
    } catch (error) {
        next(error)
        
    }
}