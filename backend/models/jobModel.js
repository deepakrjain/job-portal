const db = require('../config/db');

const Job = {
    create: (data, callback) => {
        const query = 'INSERT INTO jobs (title, description, location, salary, contact_email) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data.title, data.description, data.location, data.salary, data.contact_email], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM jobs';
        db.query(query, callback);
    },
};

module.exports = Job;