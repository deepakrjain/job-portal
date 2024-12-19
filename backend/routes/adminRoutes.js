const express = require('express');
const { addJob, listJobs } = require('../controllers/adminController');
const router = express.Router();

router.post('/jobs', addJob);
router.get('/jobs', listJobs);

module.exports = router;