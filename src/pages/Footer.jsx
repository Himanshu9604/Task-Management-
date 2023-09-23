import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG95yEEiYmZue1H0YddDiWq50tUf7RZLJbNw&usqp=CAU" alt="Task Manager Footer Logo" />
          </div>
          <div className="footer-text">
            <h4>Task Manager</h4>
            <p>Your go-to solution for efficient task management.</p>
            <p>Stay organized, collaborate with your team, and boost productivity with our powerful task management tools.</p>
            <p>Manage tasks, set deadlines, track progress, and achieve your goals with ease.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
