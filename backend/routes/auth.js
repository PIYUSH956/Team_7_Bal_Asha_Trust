const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/auth");
const {
  login,
  signup,
  verifyAccount,
  getUserActivity
} = require("../controller/auth");
const { trackUser } = require("../controller/trackUser");



// Route to Login
router.post("/login",  authCheck,  login);  // Kaam ki hai

// Route to create user
router.post("/signup", authCheck, signup);

//getUserActivity

router.get("/get-user-activity",getUserActivity);

router.get("/send-mail",trackUser);
module.exports = router ;