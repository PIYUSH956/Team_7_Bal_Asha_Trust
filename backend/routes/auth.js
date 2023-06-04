const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/auth");
const {
  login,
  signup,
  verifyAccount,
} = require("../controller/auth");



// Route to Login
router.post("/login",  authCheck,  login);


// Route to create user
router.post("/signup", authCheck, signup);
router.post("/verify", authCheck, verifyAccount);


module.exports = router ;