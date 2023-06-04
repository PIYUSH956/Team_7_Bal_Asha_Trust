const multer = require('multer');
const Child = require('../models/childSchema');

exports.insertChildData= async (req,res) =>{

    var base64 = req.body.image;
//    console.log(req.body);    

    try{
    const x = new Child({image:base64});
    x.save();
    console.log(x);
    return res.status(201).json({message:"Successfully Created"});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:err.message});
    }
}


