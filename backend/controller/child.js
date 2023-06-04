const multer = require('multer');
const Child = require('../models/childSchema');

exports.insertChildData= async (req,res) =>{

    try {
        const newChild = new Child(req.body);
        const savedChild = await newChild.save();
        res.status(200).json(savedChild);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to insert new child' });
      }
};

exports.updateChildData=async (req,res) =>{

    try {

    }catch(error){

    }

};
