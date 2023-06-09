const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.getUserDetail = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    //finding user
    try {
        const user = await User.findOne({ _id: id });
        if (user) {
            res.status(200).send(user);
        } else {
            console.error(error);
            return res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

//update user profile
exports.updateUserProfile = async (req, res) => {
    const _id=req.body.id;
    const image=req.body.image;
    const newPassword=req.body.password;
    console.log(req.body);
    console.log(_id);

    if(image==null)image="";

    if(newPassword.length>5){
        try{
            const salt = await bcrypt.genSalt(12);
            const password = await bcrypt.hash(newPassword, salt);
           console.log(image);
            const user = await User.findOneAndUpdate({ _id }, {password,image });
            if (user) {
                res.status(200).send({
                    user
                })
            } else {
                console.error(error);
                return res.status(400).json({ message: "Error" });
            }
        } catch (error) {
            return res.status(400).json({ message: "Error" });
        }
    
    }else{
    try{
    const user = await User.findOneAndUpdate({ _id }, { image });
    if (user) {
        res.status(200).send({
            user
        })
    } else {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }

} catch (error) {
    return res.status(400).json({ message: "Error" });
}
    }


};


//getting all users
exports.getAllUser = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

// API IMP
exports.getSocialWorker = async (req, res) => {
    try {
        const user = await User.find({ role: 'root' }).select('district');
        if (user) {
            res.status(200).send(user);
        } else {
            console.error(error);
            return res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

exports.getSocialWorkerForSchedule = async (req, res) => {
    try {
        const user = await User.find({ role: 'root' }).select("-image");
        if (user) {
            res.status(200).send(user);
        } else {
            console.error(error);
            return res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

// API IMP
exports.getCaseManager = async (req, res) => {

    try {
        const user = await User.find({ role: 'manager' }).select('district');
        if (user) {
            res.status(200).send(user);
        } else {
            console.error(error);
            return res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

exports.getOperationManager = async (req, res) => {

    try {
        const user = await User.find({ role: 'operation manager' });
        if (user) {
            res.status(200).send(user);
        } else {
            console.error(error);
            return res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error" });
    }
};

