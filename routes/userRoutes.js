const express = require('express');
const { loginController, registerController,authController, } = require('../controller/userCtrl');
const authMiddleware = require("../middlewares/authMiddleware");
// router object creation
const router = express.Router();

// router
// LOGIN || POST
router.post('/login',loginController);

// REGISTER || POST
router.post('/register', registerController);

// Auth || POST
router.post('/getUserData', authMiddleware, authController);

module.exports = router;