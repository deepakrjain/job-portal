import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import getAuth and signInWithEmailAndPassword
import api from '../utils/api'; // Import the API utility
import app from '../utils/firebaseConfig'; // Import Firebase app (if required for initialization)

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth(); // Correct usage of getAuth

        try {
            // Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            console.log('Firebase Login Successful:', userCredential);

            const firebaseUser = userCredential.user;

            // Fetch user role from MySQL
            const response = await api.post('/getUser', { email: firebaseUser.email });
            console.log('MySQL Response:', response.data);

            const userDetails = response.data;

            // Redirect based on role
            if (userDetails.role === 'admin') {
                navigate('/admin/jobs');
            } else if (userDetails.role === 'candidate') {
                navigate('/candidate/jobs');
            } else {
                throw new Error('Role not recognized');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(
                err.response?.data?.message || 
                err.message || 
                'An error occurred. Please try again.'
            );
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;