const express = require("express");
const router = express.Router();
const {
    createProcess,
    addAbandon,
    deleteAbandon,
    getAbandon,
    getProcess,
    updateProcess,
    getDataInProcess,
    getValuePresent
} = require("../controller/process");

//create process of child
//create-process/case-Id


router.post("/get-process-by-category", getProcess);

router.post("/add-abandond", addAbandon);

router.get("/get-abandond", getAbandon);

router.post("/get-value-present", getValuePresent);


router.post("/get-data-in-process", getDataInProcess);

// FOR BOX2
router.post("/update-process",updateProcess);


router.post("/delete-abandond", deleteAbandon);

// router.post("/update-abandond", updateAbandon);

module.exports = router;