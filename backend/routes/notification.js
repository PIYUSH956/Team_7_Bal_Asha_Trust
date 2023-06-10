const express = require("express");
const router = express.Router();

const {
    notifyWorker,
    getNotification,
    clearNotification
} = require("../controller/notification");

router.post("/notify-worker", notifyWorker);

router.post("/get-Notification",getNotification);

router.put("/clear-notification",clearNotification);
module.exports = router;