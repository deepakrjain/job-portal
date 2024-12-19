// backend/controllers/adminController.js

const Job = require('../models/jobModel');

exports.addJob = async (req, res) => {
    try {
        const { title, description, location, salary, requirements } = req.body;
        const newJob = new Job({ title, description, location, salary, requirements });
        await newJob.save();
        res.status(201).send('Job added successfully');
    } catch (error) {
        res.status(500).send('Error adding job: ' + error.message);
    }
};

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).send('Error fetching jobs: ' + error.message);
    }
};

exports.getJobApplications = async (req, res) => {
    try {
        // Assuming there's a JobApplication model to store applications
        const applications = await JobApplication.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).send('Error fetching job applications: ' + error.message);
    }
};