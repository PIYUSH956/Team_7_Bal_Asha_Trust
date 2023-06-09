const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//SCHEMA FOR USER
const userActivity = new mongoose.Schema({
    userID: {
        type: String,
        require: true,
        index: true,
        unique: true,
    },
    email:{
        type: String,
        required:true
    },
    date: { type: Date, default: Date.now }


});

const UserActivity = mongoose.model('UserActivity', userActivity);
module.exports = UserActivity;