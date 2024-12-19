import React, { useState } from 'react';
import axios from '../../utils/api';

const AddJobForm = () => {
    const [job, setJob] = useState({ title: '', description: '', location: '', salary: '', contact_email: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/admin/jobs', job);
            alert('Job added successfully');
            setJob({ title: '', description: '', location: '', salary: '', contact_email: '' });
        } catch (err) {
            console.error('Error adding job', err);
            alert('Failed to add job');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} />
            <textarea placeholder="Description" value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} />
            <input type="text" placeholder="Location" value={job.location} onChange={(e) => setJob({ ...job, location: e.target.value })} />
            <input type="number" placeholder="Salary" value={job.salary} onChange={(e) => setJob({ ...job, salary: e.target.value })} />
            <input type="email" placeholder="Contact Email" value={job.contact_email} onChange={(e) => setJob({ ...job, contact_email: e.target.value })} />
            <button type="submit">Add Job</button>
        </form>
    );
};

export default AddJobForm;