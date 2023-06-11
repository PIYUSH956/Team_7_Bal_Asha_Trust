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
    getCompletedCaseForRoot,
    getAllCaseForRoot,
    getAssignAndNotGoing,
    changeToCompleted,
    getCaseDetail,
} = require("../controller/case");

//assign case of child
// IMP
router.post("/assign-case", assignCase);

// IMP FOR SOCIAL WORKER DASHBOARD GRAPH
router.get("/get-assign-case", assignedCase);

// IMP FOR ROOT
router.post("/get-all-case-for-root", getAllCaseForRoot);

router.post("/get-completed-case", completedCase);
router.post("/get-completed-case-for-root", getCompletedCaseForRoot);
router.post("/get-pending-child-data-for-admin", getPendingChildDataForAdmin); // KAAM KI HAI
router.post("/get-on-going-child-data-for-admin",getOnGoingChildDataForAdmin); // KAAM KI HAI

// IMP FOR SOCIAL WORKER PENDING CASES 
router.get("/get-assign-and-not-going-case",getAssignAndNotGoing);
router.get("/get-on-going-case", onGoingCases);
router.post("/fake-api", fakeApiController);

//IMP
router.post("/change-to-completed",changeToCompleted);

router.post("/get-case-detail",getCaseDetail);


module.exports = router;