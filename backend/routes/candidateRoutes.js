const express = require('express');
const { getJobs } = require('../controllers/candidateController');
const router = express.Router();

router.get('/jobs', getJobs);

module.exports = router;