import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // We'll add custom CSS for colors and fonts

const Home = () => {
    return (
        <div className="container mt-5">
            {/* Welcome Section */}
            <div className="text-center mb-5">
                <h1 className="display-4" style={{ color: '#2c3e50' }}>Welcome to Job Portal</h1>
                <p className="lead" style={{ color: '#7f8c8d' }}>Your one-stop solution to manage and apply for jobs!</p>
                <Link to="/register" className="btn btn-primary mx-2 btn-lg">Register</Link>
                <Link to="/login" className="btn btn-success mx-2 btn-lg">Login</Link>
            </div>

            {/* How It Works Section */}
            <div className="row text-center mb-5" style={{ backgroundColor: "#f0f8ff" }}>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Step 1" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>Step 1: Create Account</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>Sign up to create your profile and start applying for jobs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Step 2" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>Step 2: Search Jobs</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>Browse through a wide range of job listings tailored to your skills.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Step 3" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>Step 3: Apply Now</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>Apply to jobs that match your profile with just a click.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="text-center mb-5">
                <h2 className="font-weight-bold" style={{ color: '#34495e' }}>Featured Jobs</h2>
                <p style={{ color: '#7f8c8d' }}>Check out some of the latest job openings!</p>
            </div>
            <div className="row">
                {/* Job Card 1 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Job 1" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>Software Developer</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>Company XYZ is looking for a skilled Software Developer. Apply now!</p>
                            <Link to="/job-details/1" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                {/* Job Card 2 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Job 2" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>UX/UI Designer</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>Join our team as a UX/UI Designer. We’re looking for creative minds!</p>
                            <Link to="/job-details/2" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>

                {/* Job Card 3 */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card border-light shadow-sm">
                        <img src="your-image-link-here" className="card-img-top" alt="Job 3" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#2c3e50' }}>Product Manager</h5>
                            <p className="card-text" style={{ color: '#7f8c8d' }}>We’re hiring a Product Manager to lead and drive innovation!</p>
                            <Link to="/job-details/3" className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center mt-5">
                <h2 className="font-weight-bold" style={{ color: '#2c3e50' }}>Ready to Get Started?</h2>
                <p style={{ color: '#7f8c8d' }}>Sign up now to start your job search journey with us.</p>
                <Link to="/register" className="btn btn-success btn-lg">Get Started</Link>
            </div>
        </div>
    );
};

export default Home;