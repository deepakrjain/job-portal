import React, { useEffect, useState } from 'react';
import API from '../services/api';

const CandidateJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await API.get('/jobs/list');
            setJobs(res.data);
        };
        fetchJobs();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Available Jobs</h2>
            <ul className="list-group">
                {jobs.map((job) => (
                    <li key={job.id} className="list-group-item">
                        <h5>{job.title}</h5>
                        <p>{job.description}</p>
                        <p>Location: {job.location}</p>
                        <p>Contact: {job.contact_email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateJobs;