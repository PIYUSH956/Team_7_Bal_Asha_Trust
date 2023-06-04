const express = require("express");
const router = express.Router();
const {
 insertChildData,
 updateChildData

} = require("../controller/child");



// Route to Insert Child Data
router.post("/insert-data",  insertChildData);


// route to update child data 

router.put("/update-child",updateChildData);



module.exports = router ;