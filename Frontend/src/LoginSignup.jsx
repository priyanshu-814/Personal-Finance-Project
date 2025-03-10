import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Dashboard from './Dashboard.jsx';
import axios from 'axios';

const LoginSignup = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleToggle = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', {
                name: formData.fullName,
                email: formData.email,
                password: formData.password
            });
            if (response.data.success) {
                setIsSignUp(false);
                setError('Registration successful! Please login.');
                setFormData({ fullName: '', email: '', password: '' });
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', {
                email: formData.email,
                password: formData.password
            });
            if (response.data.success) {
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className={`container ${isSignUp ? "active" : ""}`} id="container">
            {/* Sign In Form */}
            <div className="form-container" id="signInForm">
                <h1 className="floating">Personal Finance Manager</h1>
                <h3 className="floating">Login</h3>
                {error && <div className="error-message">{error}</div>}
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    className="input-field"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    className="input-field"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <a href="#" className="forgot-password">Forgot your password?</a>
                <button className="btn" id="signInBtn" onClick={handleSignIn}>Sign In</button>
            </div>

            {/* Sign Up Form */}
            <div className="form-container" id="signUpForm">
                <h3 className="floating">Create Account</h3>
                {error && <div className="error-message">{error}</div>}
                <input 
                    type="text"
                    name="fullName" 
                    placeholder="Full Name" 
                    className="input-field"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    className="input-field"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    className="input-field"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button className="btn" id="signUpBtn" onClick={handleSignUp}>Sign Up</button>
            </div>

            {/* Toggle Panel */}
            <div className="toggle-container">
                <div className="toggle-content">
                    <h2 id="toggle-text" className="floating">
                        {isSignUp ? "Hello, Friend!" : "Welcome Back!"}
                    </h2>
                    <p id="toggle-description" className="floating">
                        {isSignUp
                            ? "Enter your personal details and start your journey with us"
                            : "To keep connected with us, please login with your personal info"}
                    </p>
                    <button className="toggle-btn" id="toggle-btn" onClick={handleToggle}>
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};




export default LoginSignup;
