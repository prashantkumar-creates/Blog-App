import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === "" || password === "") {
      return   res.status(400).json({ message: "all field are required for signup" })
    }
    const saltRounds = 10;
    const hashedPassword = bcryptjs.hashSync(password, saltRounds);
    

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    })

    try {
        await newUser.save();
        res.json({ message: "signup successfully" })
    } catch (error) {
        res.json({ message:"allready exist"})
        
    }
}