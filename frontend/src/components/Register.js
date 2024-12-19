import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../utils/firebaseConfig'; // Updated import
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'candidate', // Default role
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Save additional user info in the database
            const user = userCredential.user;
            await set(ref(database, `users/${user.uid}`), {
                name: formData.name,
                email: formData.email,
                role: formData.role,
            });

            alert('Registration successful!');
            navigate('/login');
        } catch (err) {
            console.error('Error during registration:', err);
            setError(err.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
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
                <select name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="candidate">Candidate</option>
                    <option value="admin">Admin</option>
                </select>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;