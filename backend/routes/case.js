const express = require("express");
const router = express.Router();
const {
    assignCase
} = require("../controller/case");

//assign case of child
//assignCase/case-manger-Id
router.post("/assign-case/:id", assignCase);

module.exports = router;