import React, { useEffect, useState } from 'react';
import api from '../../utils/api'; // Adjust path to reach utils folder

const CandidateJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const email = localStorage.getItem('email'); // Store email on login
                const response = await api.post('/getAppliedJobs', { email });
                setAppliedJobs(response.data);
            } catch (err) {
                console.error(err);
                setError('Error fetching applied jobs.');
            }
        };

        fetchAppliedJobs();
    }, []);

    return (
        <div>
            <h1>Applied Jobs</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {appliedJobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <p>Location: {job.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateJobs;