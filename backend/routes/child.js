const express = require("express");
const router = express.Router();
const {
 insertChildData,
 updateChildData,
 getAllChildData,
 getChildDataWithImage,
 getCompletedChildData,
 postChangeCategory

} = require("../controller/child");



// Route to Insert Child Data
router.post("/insert-child-data",  insertChildData); // KAAM KI HAI


// route to update child data 

router.put("/update-child",updateChildData);


// IMP
router.post("/get-child-data-with-image",getChildDataWithImage);


// IMP
router.post("/get-all-child-data",getAllChildData);

router.post("/get-completed-child-data",getCompletedChildData);


router.post("/change-category",postChangeCategory);

module.exports = router ;