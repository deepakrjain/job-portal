const express = require('express');
const { getJobs, applyForJob } = require('../controllers/candidateController');
const router = express.Router();

router.get('/jobs', getJobs);
router.post('/apply', applyForJob);

module.exports = router;