import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="logo.png" alt="Airbnb Logo" className="logo" />
      </Link>
      <div className="navbar-links">
      <Link to="/">Home</Link>

        <Link to="/Become-Host">Become a host</Link>
        <Link to="/help">Help</Link>
        <Link to="/SignupForm" className="btn btn-primary">Sign up</Link>
        <Link to="/LoginForm" className="btn btn-secondary">Log in</Link>
        <Link to="/Profile">Profile</Link>

      </div>
    </nav>
  );
}

export default Navbar;
