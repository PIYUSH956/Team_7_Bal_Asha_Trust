
const bcrypt = require("bcrypt");

exports.authCheck = async (req, res, next) => {

  console.log("HEADER",req.headers);
  console.log("BODY",req.body);
  try {
    bcrypt.hash(req.headers.password,12,function(err,has){
      if(!err) {
      const email = req.headers.email;
      const password = has;
      req.credential = {
        email,
        password,
      };
      next();
    }
    })
  } catch (err) {
    res.status(401).json({ err: "Invalid Request" });
  }

};
