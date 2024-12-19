// backend/routes/authRoutes.js
const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginUser);  // Route for login
router.post('/register', registerUser);  // Route for registration

module.exports = router;