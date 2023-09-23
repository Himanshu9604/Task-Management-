import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const LogIn = ({ updateLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = JSON.parse(localStorage.getItem("userInfo"));
    const checkValidUser = getData.find(
      (data) => data.email === email && data.password === password
    );
    if (checkValidUser) {
      setError(false);
      updateLoggedInUser(checkValidUser.name);
      alert("LogIn Successful");
      navigate("/task")
    } else {
      setError(true);
      alert("Please enter valid details");
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <p>
          Welcome, {loggedInUser}! <Link to="/task">Go to Task List</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter valid mail id here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter valid password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          {error && <p className="error">Please enter valid details</p>}
        </form>
      )}
    </div>
  );
};

export default LogIn;
