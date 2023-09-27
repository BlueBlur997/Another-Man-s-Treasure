import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ token, setToken }) => {

  const handleLogout = () => {
    // Clear the token from local storage and state
    localStorage.removeItem('token');
    setToken('');
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link" href="#">
            Home
          </Link>
          <Link to="/Products" className="nav-item nav-link" href="#">
            Products
          </Link>
          <Link to="/Cart" className="nav-item nav-link" href="#">
            Cart
          </Link>
          {token ? (
            <Link to="/" className="nav-item nav-link" onClick={handleLogout}>
              Log Out
            </Link>
          ) : (
            <Link to="/SignIn" className="nav-item nav-link" href="#">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
