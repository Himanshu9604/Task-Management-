import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Tasks from "./components/Task";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogout = () => {
    setLoggedInUser("");
  };

  return (
    <div className="App">
      <Navbar userName={loggedInUser} onLogout={handleLogout} />

      <div className="main-content" >
        <h1 >Welcome to Task Management</h1>
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<LogIn updateLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/task" element={<Tasks />} />
      </Routes>
     
    </div>
  );
}

export default App;
