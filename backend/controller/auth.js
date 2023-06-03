const User = require('../models/user');
const bcrypt = require("bcrypt");
// FUNCTION TO LOGIN USER
exports.login=async(req,res)=>{
    
    const {email,password} = req.credential;

    console.log(email+password);

}

// FUNCTION TO SIGN UP USER
exports.signup=(req,res)=>{
    
   const {email,password} = req.credential;



}

