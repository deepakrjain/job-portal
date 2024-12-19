import React, { useState } from 'react';
import axios from '../../utils/api'; // Correct path for api.js
import { useNavigate } from 'react-router-dom';

const AddJobForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [requirements, setRequirements] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Correct name for the `useNavigate` function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jobData = { title, description, location, salary, requirements };
            await axios.post('/admin/add-job', jobData); // Use the imported `axios`
            navigate('/dashboard'); // Redirect back to dashboard after adding job
        } catch (err) {
            setError(err.response?.data?.message || 'Error adding job');
        }
    };

    return (
        <div>
            <h2>Add New Job</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJobForm;