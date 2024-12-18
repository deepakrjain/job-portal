import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CandidateJobs from './components/CandidateJobs';
import AdminJobs from './components/AdminJobs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/candidate/jobs" element={<CandidateJobs />} />
                <Route path="/admin/jobs" element={<AdminJobs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;