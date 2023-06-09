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
// IMP
router.post("/assign-case", assignCase);

// IMP FOR SOCIAL WORKER DASHBOARD GRAPH
router.post("/get-assign-case", assignedCase);
router.post("/get-all-case-for-root", getAllCaseForRoot);

router.post("/get-completed-case", completedCase);

router.post("/get-pending-child-data-for-admin", getPendingChildDataForAdmin); // KAAM KI HAI
router.post("/get-on-going-child-data-for-admin",getOnGoingChildDataForAdmin); // KAAM KI HAI

// IMP FOR SOCIAL WORKER PENDING CASES 
router.post("/get-assign-and-not-going-case",getAssignAndNotGoing);
router.post("/get-on-going-case", onGoingCases);
router.post("/fake-api", fakeApiController);

module.exports = router;