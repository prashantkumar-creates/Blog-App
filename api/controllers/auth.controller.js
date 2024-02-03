import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

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


export const signin = async (req, res,next) => {
    const {email, password} = req.body;
    if(!email || !password || email === "" || password === ""){
        next(errorHandler(400,"all field are require"));
    }
     

    try {

        // email check 
        const validUser = await User.findOne({ email });
       
        if(!validUser){
            return  next(errorHandler(400,"invalid email"));
        }
        // password check
        const isvalidPassword = bcryptjs.compareSync(password,validUser.password);
        if(!isvalidPassword){
          return  next(errorHandler(400,"invalid password"));
        }
         // if all correct then generate token
        // token generate
        const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        console.log(rest)
        console.log(validUser._doc)

        res.status(200)
           .cookie("access_token",token,{
            httpOnly:true,
        }).json(rest) 

    } catch (error) {
        next(errorHandler(500,"something went wrong"));
    }

}

 export const google =async (req, res, next) => {
    const { name, email, googleImageUrl } = req.body;

    try {
        const user = await User.findOne({ email });

        if(user){
            const token = jwt.sign({ id: user._id },process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res.status(200)
               .cookie("access_token",token,{
                httpOnly:true,
            }).json(rest)
        }
        else
        {
            const generatePassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
            const newUser = new User({
                username: name.split(" ").join("") + Math.random().toString(9).slice(-5),
                email,
                password: hashedPassword,
                profilePic: googleImageUrl
            });
            await newUser.save();
           const token = jwt.sign({ id: newUser._id },process.env.JWT_SECRET);
            const { password: pass, ...rest } = newUser._doc;
            res.status(200)
               .cookie("access_token",token,{
                httpOnly:true,
            }).json(rest)   
          
        }
    } catch (error) {
        console.log(error)
    }
}