const Job = require('../models/jobModel');

// Add a job
const addJob = (req, res) => {
    const jobData = req.body;
    Job.create(jobData, (err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to add job' });
        res.status(201).json({ message: 'Job added successfully' });
    });
};

// List all jobs
const listJobs = (req, res) => {
    Job.getAll((err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch jobs' });
        res.status(200).json(results);
    });
};

module.exports = { addJob, listJobs };