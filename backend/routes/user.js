const express = require("express");
const router = express.Router();
const {
    getUserDetail,
    updateUserProfile,
    getSocialWorker,
    getOperationManager,
    getCaseManager,
    getAllUser,
} = require("../controller/user");



// Route to get user details
router.get("/get-user/:id", getUserDetail);

// Route to update user profile

router.put("/update-profile/:id" , updateUserProfile);

//route to get all user

router.get("/get-all-user",getAllUser);

//route to get social workers

router.get("/get-social-worker",getSocialWorker);


router.get("/get-case-manager",getCaseManager);


router.get("/get-operation-manager",getOperationManager);










module.exports = router ;