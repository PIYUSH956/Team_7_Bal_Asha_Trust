
const bcrypt = require("bcrypt");

exports.authCheck = async (req, res, next) => {

  console.log("HEADER",req.headers);
  console.log("BODY",req.body);
 
  next();

};
