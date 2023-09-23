import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [localData, setLocalData] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z\s]+$/; // Regex for name (only letters and spaces)
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Regex for email
  const numberRegex = /^\d{10}$/; // Regex for a 10-digit number
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Regex for password (at least 8 characters, one lowercase, one uppercase, one digit)

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input data with regex
    if (!nameRegex.test(data.name)) {
      alert("Please enter a valid name (only letters and spaces).");
      return;
    }

    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!numberRegex.test(data.number)) {
      alert("Please enter a valid 10-digit number.");
      return;
    }

    if (!passwordRegex.test(data.password)) {
      alert("Please enter a valid password (at least 8 characters, one lowercase, one uppercase, one digit).");
      return;
    }

    const newData = [...localData, data];
    setLocalData(newData);
    localStorage.setItem("userInfo", JSON.stringify(newData));
    alert("Registration successful! Please confirm.");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={data.name}
        name="name"
        id="name"
        onChange={handleInput}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={data.email}
        name="email"
        id="email"
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Enter Your Number"
        value={data.number}
        name="number"
        id="number"
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={data.password}
        name="password"
        id="password"
        onChange={handleInput}
      />
      <button type="submit">Register</button>
      <button className="login-button">
        <Link to="/login">Log In</Link>
      </button>
    </form>
  );
};

export default Register;
