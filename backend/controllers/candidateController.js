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

// backend/controllers/candidateController.js

const JobApplication = require('../models/applicationModel');

exports.applyForJob = async (req, res) => {
    try {
        const { jobId, candidateId, coverLetter } = req.body;
        const application = new JobApplication({ jobId, candidateId, coverLetter });
        await application.save();
        res.status(201).send('Job application submitted successfully');
    } catch (error) {
        res.status(500).send('Error applying for job: ' + error.message);
    }
};

exports.searchJobs = async (req, res) => {
    try {
        const { title, location } = req.query;
        const jobs = await Job.find({ title: new RegExp(title, 'i'), location: new RegExp(location, 'i') });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).send('Error searching jobs: ' + error.message);
    }
};

module.exports = { getJobs, applyForJob };