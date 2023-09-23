import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ userName, onLogout }) => {
  const isLoggedIn = !!userName;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.graphicmama.com/uploads/2019/3/5c81d12ca5c93-Tasks%20Management%20Logo%20Design.jpg"
              alt="Task Manager Logo"
            />
            Task Manager
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            {isLoggedIn ? (
              <>
                Welcome, {userName}!
                <button className="logout-button" onClick={onLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="/task">Add User</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
