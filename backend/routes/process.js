const express = require("express");
const router = express.Router();
const {
    createProcess
} = require("../controller/process");

//create process of child
//create-process/case-Id
router.post("/create-process/:id", createProcess);

module.exports = router;