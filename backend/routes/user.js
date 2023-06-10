const express = require("express");
const router = express.Router();
const {
    getUserDetail,
    updateUserProfile,
    getSocialWorker,
    getOperationManager,
    getCaseManager,
    getAllUser,
    getSocialWorkerForSchedule,
} = require("../controller/user");



// Route to get user details
router.get("/get-user/:id", getUserDetail);

// Route to update user profile

router.post("/update-profile" , updateUserProfile);

//route to get all user

router.get("/get-all-user",getAllUser);

//route to get social workers


// IMP
router.get("/get-social-worker",getSocialWorker);

//IMP
router.get("/get-social-worker-for-schedule",getSocialWorkerForSchedule)

// IMP
router.get("/get-case-manager",getCaseManager);


router.get("/get-operation-manager",getOperationManager);










module.exports = router ;