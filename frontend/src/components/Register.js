import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerWithFirebase } from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerWithFirebase(formData.email, formData.password, formData.role);
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} className="form-control mb-3" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="form-control mb-3" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-control mb-3" />
                <select name="role" onChange={handleChange} className="form-control mb-3">
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="candidate">Candidate</option>
                </select>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;