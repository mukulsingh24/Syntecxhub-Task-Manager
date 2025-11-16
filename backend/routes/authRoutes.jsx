const express = require('express')
// router object
const router = express.Router();
const authController = require("../controllers/authController")

router.post('/register',authController);

module.exports = router;