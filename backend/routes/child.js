const express = require("express");
const router = express.Router();
const {
 insertChildData,
 updateChildData,
 getChildData

} = require("../controller/child");



// Route to Insert Child Data
router.post("/insert-child-data",  insertChildData);


// route to update child data 

router.put("/update-child",updateChildData);

router.get("/get-child-data",getChildData);



module.exports = router ;