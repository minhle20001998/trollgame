const express = require('express');
const router = express.Router();
const AuthenController = require('../controllers/authenController');

router.post('/login', AuthenController.login);
router.post('/register', AuthenController.register);

module.exports = router;