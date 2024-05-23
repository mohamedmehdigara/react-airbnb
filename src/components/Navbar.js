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

        <Link to="/become-a-host">Become a host</Link>
        <Link to="/help">Help</Link>
        <Link to="/SignupForm" className="btn btn-primary">Sign up</Link>
        <Link to="/log-in" className="btn btn-secondary">Log in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
