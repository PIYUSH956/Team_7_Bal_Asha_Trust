const express = require("express");
const router = express.Router();
const {
    createProcess,
    addAbandon,
    deleteAbandon,
    getAbandon,
    getProcess,
    updateProcess,
    getDataInProcess
} = require("../controller/process");

const {
    addOrphaned,
    getOrphaned,
    deleteOrphaned } = require("../controller/orphaned");

const { addSurrendered,
    getSurrendered,
    deleteSurrendered } = require("../controller/surrendered");

const { addAdmittedInCCI, getAdmittedInCCI, deleteAdmittedInCCI } = require("../controller/admittedInCCI");


//create process of child
//create-process/case-Id


router.post("/get-process-by-category", getProcess);


//routes for abandond process
router.post("/add-abandond", addAbandon);

router.get("/get-abandond", getAbandon);

router.post("/delete-abandond", deleteAbandon);

//routes for orphaned process
router.post("/add-orphaned", addOrphaned);

router.get("/get-orphaned", getOrphaned);

router.post("/delete-orphaned", deleteOrphaned);

//routes for surrendered process
router.post("/add-surrendered", addSurrendered);

router.get("/get-surrendered", getSurrendered);

router.post("/delete-surrendered", deleteSurrendered);

//routes for admittedInCCI process
router.post("/add-admittedInCCI", addAdmittedInCCI);

router.get("/get-admittedInCCI", getAdmittedInCCI);

router.post("/delete-admittedInCCI", deleteAdmittedInCCI);

//get process info
router.post("/get-data-in-process", getDataInProcess);


router.post("/update-process", updateProcess);




// router.post("/update-abandond", updateAbandon);

module.exports = router;