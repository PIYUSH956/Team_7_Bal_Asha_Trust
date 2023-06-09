const Notification = require('../models/notification');
const bcrypt = require("bcrypt");

// function to verify user account

exports.notifyWorker = async (req, res) => {

    const {workerID,message}=req.body;

   
  

     try {
        const notification = new Notification({workerID,message});
        const data = await notification.save();
        res.status(200).json(data);

     }catch(error){
        console.error(error);
        return res.status(400).json({ message: "Error" });
     }
};

exports.getNotification = async (req, res) => {
       
    const workerID=req.body.id;
    console.log(workerID);
    const seen=false;
   
    try{
        const result= await Notification.find({workerID,seen});
        res.status(200).json(result);
    }catch(error){
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }

};



exports.clearNotification = async (req, res) => {
       
    const workerID=req.body.id;
    console.log(workerID);
   
    try{
        await Notification.updateMany({ workerID }, { seen: true });
    res.status(200).json({ message: 'Notifications marked as read.' });
    }catch(error){
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }

};
