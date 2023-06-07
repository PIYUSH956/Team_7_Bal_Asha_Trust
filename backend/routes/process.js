const express = require("express");
const router = express.Router();
const {
    createProcess,
    addAbandon,
    deleteAbandon,
    getAbandon
} = require("../controller/process");

//create process of child
//create-process/case-Id
router.post("/create-process/:id", createProcess);


router.post("/add-abandond", addAbandon);

router.get("/get-abandond", getAbandon);

router.post("/delete-abandond", deleteAbandon);

module.exports = router;