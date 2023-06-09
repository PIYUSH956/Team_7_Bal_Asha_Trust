const express = require("express");
const router = express.Router();
const {
    assignCase,
    assignedCase,
    fakeApiController,
    onGoingCases,
} = require("../controller/case");

//assign case of child
//assignCase/case-manger-Id
router.post("/assign-case", assignCase);
router.post("/get-assign-case", assignedCase);
router.post("/get-on-going-case", onGoingCases);
router.post("/fake-api", fakeApiController);

module.exports = router;