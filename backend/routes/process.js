const express = require("express");
const router = express.Router();
const {
    createProcess,
    addAbandon,
    deleteAbandon,
    getAbandon,
    getProcess,
    updateProcess,
} = require("../controller/process");

//create process of child
//create-process/case-Id
router.post("/create-process/:id", createProcess);

router.post("/get-process-by-category", getProcess);

router.post("/add-abandond", addAbandon);

router.get("/get-abandond", getAbandon);


router.post("/update-process",updateProcess);


router.post("/delete-abandond", deleteAbandon);

// router.post("/update-abandond", updateAbandon);

module.exports = router;