// backend/routes/adminRoutes.js

const express = require('express');
const { addJob, getAllJobs, getJobApplications } = require('../controllers/adminController');
const router = express.Router();

router.post('/add-job', addJob); // Admin can add a new job listing
router.get('/jobs', getAllJobs); // List all job listings
router.get('/applications', getJobApplications); // List all job applications

module.exports = router;