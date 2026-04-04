import User from '../models/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    let {username, email, password} = req.body;
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

export const loginUser = async (req,res) => {
    res.send("Login user called");
}
