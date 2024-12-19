const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController'); // Ensure this path is correct

router.post('/getMessages', chatController.getMessages);
router.post('/postMessage', chatController.postMessage);

module.exports = router;