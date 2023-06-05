const express = require("express");
const router = express.Router();
const {
 insertChildData,
 updateChildData,
 getChildData,
 getAllChildData

} = require("../controller/child");



// Route to Insert Child Data
router.post("/insert-child-data",  insertChildData);


// route to update child data 

router.put("/update-child",updateChildData);

router.post("/get-child-data",getChildData);

router.post("/get-all-child-data",getAllChildData);


module.exports = router ;