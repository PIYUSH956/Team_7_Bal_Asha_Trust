const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

//SCHEMA FOR USER
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        index:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
    ,role:{
        type:String,
        require:true,
    }
    },
    {timestamps:true}
);

const User = mongoose.model('User',userSchema);
module.exports = User;