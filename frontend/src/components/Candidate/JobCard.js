import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.location} | ${job.salary}</p>
            <Link to={`/job/${job._id}`}>View Details</Link>
        </div>
    );
};

export default JobCard;