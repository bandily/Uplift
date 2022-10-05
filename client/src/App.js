import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login";
import "./Styling/App.css";
import Signup from "./Components/Signup";
import ProfilePage from "./Components/Profile/ProfilePage";
import NavBar from "./Components/NavBars/NavBar";
import HomeNav from "./Components/NavBars/HomeNav";
import ProfileNav from "./Components/NavBars/ProfileNav";
import NewLog from "./Components/Profile/NewLog";

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
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Router>
        <Fragment>
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <Routes>
            <Route element={<HomeNav />}>
              <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/" element={<HomePage currentUser={currentUser}/>}/>
              {/* <Route exact path="/profile" element={<ProfilePage setCurrentUser={setCurrentUser}/>}/> */}

            </Route>
            <Route element={<ProfileNav />}>
              <Route exact path="/profile" element={<ProfilePage logs={logs} setLogs={setLogs} setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/new-log" element={<NewLog addNewLog={addNewLog} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            </Route>
          </Routes>
          {/* <Routes>
            <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/profile" element={<ProfilePage setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/" element={<HomePage currentUser={currentUser}/>}/>
          </Routes> */}
        </Fragment>
      </Router>
    </>
  );
}

export default App;
