const express = require('express');
const { getUserByEmail } = require('../controllers/userController');

const router = express.Router();

// POST /getUser route
router.post('/getUser', getUserByEmail);

module.exports = router;