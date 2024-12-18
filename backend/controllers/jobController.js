const db = require('../config/db');

exports.addJob = (req, res) => {
    const { title, description, location, salary, contact_email } = req.body;

    const query = 'INSERT INTO jobs (title, description, location, salary, contact_email) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [title, description, location, salary, contact_email], (err) => {
        if (err) return res.status(500).json({ message: "Error adding job" });
        res.status(201).json({ message: "Job added successfully" });
    });
};

exports.getJobs = (req, res) => {
    const query = 'SELECT * FROM jobs';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: "Error fetching jobs" });
        res.json(results);
    });
};

exports.updateJob = (req, res) => {
    const { title, description, location, salary, contact_email } = req.body;
    const jobId = req.params.id;

    const query = 'UPDATE jobs SET title=?, description=?, location=?, salary=?, contact_email=? WHERE id=?';
    db.query(query, [title, description, location, salary, contact_email, jobId], (err) => {
        if (err) return res.status(500).json({ message: "Error updating job" });
        res.json({ message: "Job updated successfully" });
    });
};

exports.deleteJob = (req, res) => {
    const jobId = req.params.id;

    const query = 'DELETE FROM jobs WHERE id=?';
    db.query(query, [jobId], (err) => {
        if (err) return res.status(500).json({ message: "Error deleting job" });
        res.json({ message: "Job deleted successfully" });
    });
};