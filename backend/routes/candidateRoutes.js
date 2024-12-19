// backend/routes/candidateRoutes.js

const express = require('express');
const { applyForJob, searchJobs } = require('../controllers/candidateController');
const router = express.Router();

router.post('/apply-job', applyForJob); // Candidate can apply for a job
router.get('/search-jobs', searchJobs); // Candidate can search for jobs

module.exports = router;