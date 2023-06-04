const express = require("express");
const router = express.Router();
const {
 insertChildData

} = require("../controller/child");



// Route to Insert Child Data
router.post("/insert-data",  insertChildData);






module.exports = router ;