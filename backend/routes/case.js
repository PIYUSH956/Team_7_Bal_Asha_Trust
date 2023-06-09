const express = require("express");
const router = express.Router();
const {
    assignCase,
    assignedCase,
    getPendingChildDataForAdmin,
    fakeApiController,
    onGoingCases,
    completedCase,
    getOnGoingChildDataForAdmin,
    getAllCaseForRoot,
    getAssignAndNotGoing
} = require("../controller/case");

//assign case of child
//assignCase/case-manger-Id
router.post("/assign-case", assignCase);
router.post("/get-assign-case", assignedCase);
router.post("/get-all-case-for-root", getAllCaseForRoot);
router.post("/get-on-going-child-data-for-admin",getOnGoingChildDataForAdmin);
router.post("/get-completed-case", completedCase);
router.post("/get-pending-child-data-for-admin", getPendingChildDataForAdmin);
router.post("/get-assign-and-not-going-case",getAssignAndNotGoing);
router.post("/get-on-going-case", onGoingCases);
router.post("/fake-api", fakeApiController);

module.exports = router;