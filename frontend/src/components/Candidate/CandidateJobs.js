import React, { useState, useEffect } from 'react';
import axios from '../../utils/api';
import JobCard from './JobCard';

const CandidateJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/candidate/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Failed to fetch jobs', error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Available Jobs</h1>
            {jobs.length ? (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
                <p>No jobs available</p>
            )}
        </div>
    );
};

export default CandidateJobs;