const User = require('../models/user');

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

    console.log(req.body)
    try {
        const _id = req.params.id;
        const { image } = req.body;
        const user = await User.findOneAndUpdate({ _id }, { image })
        if (user) {
            res.status(200).send({
                status: 200,
                message: "Profile updated"
            })
        } else {
            console.error(error);
            return res.status(404).json({ message: "User Not Found" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Error" });
    }
};


//getting all users
exports.getAllUser = async (req, res, next) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      next(error);
      return;
    }
  };


exports.getSocialWorker = async (req, res) => {

    try {
        const user = await User.find({ role: 'root' });
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

exports.getCaseManager = async (req, res) => {

    try {
        const user = await User.find({ role: 'case manager' });
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

 