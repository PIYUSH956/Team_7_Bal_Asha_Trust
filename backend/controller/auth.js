const User = require('../models/user');
const bcrypt = require("bcrypt");
// FUNCTION TO LOGIN USER
exports.login=async(req,res)=>{
    
   // const {email,password} = req.credential;
   const user = new User({
    email: "xyz@example.com",
    password: "123",
    role:"aa",
    });

    user.save().then(function (doc) {
        console.log(doc._id.toString());
    }).catch(function (error) {
        console.log(error);
    });


   // console.log(email+password);

}

// FUNCTION TO SIGN UP USER
exports.signup=(req,res)=>{
    
   const {email,password} = req.credential;



}

