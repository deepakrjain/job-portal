import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithFirebase } from '../services/api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginWithFirebase(formData.email, formData.password);
            localStorage.setItem('token', res.token);
            localStorage.setItem('role', res.role);
            alert('Login successful!');
            if (res.role === 'admin') navigate('/admin/jobs');
            else navigate('/candidate/jobs');
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="form-control mb-3" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-control mb-3" />
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
};

export default Login;