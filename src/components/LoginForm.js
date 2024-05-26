import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Replace with your API call to login the user
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login (e.g., store user data, redirect to desired page)
      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user)); // Placeholder for storing user data
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  // Placeholder functions for social login (replace with your implementation)
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider} is not implemented yet.`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Log In</button>
      <div className="social-login">
        <button onClick={() => handleSocialLogin('google')}>
          <i className="fab fa-google"></i> Login with Google
        </button>
        <button onClick={() => handleSocialLogin('facebook')}>
          <i className="fab fa-facebook-f"></i> Login with Facebook
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
