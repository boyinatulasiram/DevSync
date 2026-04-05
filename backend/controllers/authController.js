import User from '../models/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    let {username, email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            res.status(400).json({message: "User already exists"});
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new User({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({message: "User created successfully"});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    
}

export const loginUser = async (req,res) => {
    try{
         const {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user) return res.status(400).send("Invalid Credentials" );
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).send("Invalid Credentials");
        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
   
}


