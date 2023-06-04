const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        min: 4,
        max: 15
    },
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }, 
    role: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    imageUrl: {
        type: String
    },

})

module.exports=mongoose.model('User', userSchema);