// frontend/src/components/Admin/JobListTable.js
import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const JobListTable = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/admin/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <p>{job.location}</p>
                        <p>Salary: {job.salary}</p>
                        <p>Requirements: {job.requirements}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListTable;