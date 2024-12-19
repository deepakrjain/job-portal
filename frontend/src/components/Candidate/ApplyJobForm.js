// components/ApplyJobForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ApplyJobForm = ({ jobId }) => {
    const [coverLetter, setCoverLetter] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/jobs/${jobId}/apply`, { coverLetter });
            if (response.data.success) {
                history.push('/home');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Error applying for job');
        }
    };

    return (
        <div className="apply-job-container">
            <form onSubmit={handleSubmit}>
                <h2>Apply for Job</h2>
                <textarea
                    placeholder="Cover Letter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Apply</button>
            </form>
        </div>
    );
};

export default ApplyJobForm;