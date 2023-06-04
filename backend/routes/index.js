const express = require('express');
const router = express.Router();

const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");

const {
    registerValidation
} = require("../validation");


router.post('/register', registerController.user_register);
router.get('/login', loginController.user_login);

module.exports = router;