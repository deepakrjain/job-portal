const Job = require('../models/jobModel');

// Get all jobs
const getJobs = (req, res) => {
    Job.getAll((err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch jobs' });
        res.status(200).json(results);
    });
};

// Apply for a job (placeholder for now)
const applyForJob = (req, res) => {
    res.status(200).json({ message: 'Application submitted successfully' });
};

module.exports = { getJobs, applyForJob };