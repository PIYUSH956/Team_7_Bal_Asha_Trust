const User = require('../models/user');
const bcrypt = require("bcrypt");

// function to verify user account

exports.verifyAccount = async (req, res) => {
    console.log(req.body);
    //checking if the email exsist
    try {
        const _id = req.params.id;
        const { password } = req.body;
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

<<<<<<< HEAD
    const { email, password, username, image, role } = req.body;

    try {
        // Enrypting password
        bcrypt.hash(password, 12, function (err, has) {
            if (!err) {

                const x = new User({ email, password: has, username, image, role });

                x.save(function (error, result) {
                    if (error) {
                        console.error(error);
                        return res.status(400).json({ message: "Username or Email Already exists" });
                    } else {
                        console.log(result);
                        return res.status(200).send(result);
                    }
                });


            }
        })
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid Request" });
    }
=======
   const { email, password, username, image, role } = req.body;

   try {
      // Enrypting password
      bcrypt.hash(password, 12, function (err, has) {
         if (!err) {
              
               const x = new User({ email, password: has, username, image, role });
      
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
>>>>>>> piyush
};







