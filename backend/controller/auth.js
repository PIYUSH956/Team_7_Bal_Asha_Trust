const User = require('../models/user');
const UserActivity = require('../models/userActivity');
const bcrypt = require("bcrypt");

// function to verify user account

exports.verifyAccount = async (req, res) => {
    console.log(req.body);
    //checking if the email exsist
    try {
        const _id = req.params.id;
        

        //hash password
        const salt = await bcrypt.genSalt(12);
        const password = await bcrypt.hash(req.body.password, salt);
        console.log(password);
        const user = await User.findOneAndUpdate({ _id }, { password, verified: true })
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

};
// FUNCTION TO LOGIN USER
exports.login = async (req, res) => {



    //validating user data

    console.log(req.body);

    //checking if the email exsist
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            console.error(error);
            return res.status(404).json({ message: "Incorrect Email" });
        }



        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            console.error(error);
            return res.status(400).json({ message: "Incorrect Passward" });
        }

        const userID=user._id;
        const email=user.email;
        try{

        const res=await UserActivity.findOneAndDelete({userID});
        const activity=new UserActivity({userID,email});
        const data =await activity.save();
        console.log(data);

        }catch(error){
          return res.status(400).json({messsage:"error in userAcitivty"});
        }


        return res.status(200).send(user);
        //   await User.updateOne({email: req.body.email}, {token: req.body.token})

        //create web token
        //   const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        //   res.header("auth_token", token).send(user);
    } catch (error) {
        return res.status(400).json({ message: " DB error" });
    }


};

// FUNCTION TO SIGN UP USER
exports.signup = async (req, res) => {

   const { email, password, username, image, role,state,district } = req.body;

   try {
      // Enrypting password
      bcrypt.hash(password, 12, function (err, has) {
         if (!err) {
              
               const x = new User({ email, password: has, username, image, role,state,district });
      
               x.save(function(error,result){
                 if(error){
                  console.error(error);
                  return res.status(400).json({message:"Username or Email Already exists"});
                 }else{
                    console.log(result);
                    return res.status(200).json({message:"Succesfully Registered"});
                 }
               });
               
            
         }
      })
   }
   catch (err) {
      return res.status(401).json({ message: "Invalid Request" });
   }
};

exports.getUserActivity = async (req, res) => {

    try{

        const data = await UserActivity.find();
        return res.status(200).send(data);
    }catch(error){
        return res.status(401).json({ message: "Invalid Request" })
    }
};


