import React, { useEffect, useState } from 'react';
import API from '../services/api';

const AdminJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await API.get('/jobs/list');
            setJobs(res.data);
        };
        fetchJobs();
    }, []);

    const handleDelete = async (id) => {
        await API.delete(`/jobs/delete/${id}`);
        setJobs(jobs.filter((job) => job.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2>Manage Jobs</h2>
            <ul className="list-group">
                {jobs.map((job) => (
                    <li key={job.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{job.title}</span>
                        <button className="btn btn-danger" onClick={() => handleDelete(job.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminJobs;