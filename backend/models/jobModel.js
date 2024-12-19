// backend/models/jobModel.js
const db = require('../config/db');

module.exports = {
    addJob: (jobData, callback) => {
        const { title, description, location, salary, requirements } = jobData;
        const query = 'INSERT INTO jobs (title, description, location, salary, requirements) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [title, description, location, salary, requirements], callback);
    },
    getAllJobs: (callback) => {
        const query = 'SELECT * FROM jobs';
        db.query(query, callback);
    },
    applyForJob: (applicationData, callback) => {
        const { jobId, coverLetter } = applicationData;
        const query = 'INSERT INTO applications (job_id, cover_letter) VALUES (?, ?)';
        db.query(query, [jobId, coverLetter], callback);
    },
    // Other CRUD operations...
};