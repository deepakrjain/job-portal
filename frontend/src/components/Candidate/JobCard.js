import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Contact:</strong> {job.contact_email}</p>
        </div>
    );
};

export default JobCard;