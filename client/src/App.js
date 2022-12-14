import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login";
import "./Styling/App.css";
import Signup from "./Components/Signup";
import ProfilePage from "./Components/Profile/ProfilePage";
import NavBar from "./Components/NavBars/NavBar";
import NewLog from "./Components/NavBars/NewLog";
import Avatar from "./Components/Avatar/Avatar.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [logs, setLogs] = useState([])

  function addNewLog(new_log) {
    setLogs((log) => [new_log, ...log])
  }

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);

  return (
    <>
      <div className="bg"></div>
      <div className="bg 2"></div>
      <div className="bg 3"></div>
      <Router>
        <Fragment>
          <Outlet />
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Routes>
            <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/profile" element={<ProfilePage logs={logs} setLogs={setLogs} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/new-log" element={<NewLog addNewLog={addNewLog} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/avatar" element={<Avatar currentUser={currentUser}/>}/>
            <Route exact path="/" element={<HomePage currentUser={currentUser}/>}/>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
