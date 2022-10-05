import React, { useState, Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login';
import './Styling/App.css'
import Signup from './Components/Signup'
import ProfilePage from './Components/Profile/ProfilePage'
import NavBar from './Components/NavBar';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if(res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  return (
    <>
    <div className='bg'></div>
    <div className='bg bg2'></div>
    <div className='bg bg3'></div>
      <Router>
        <Fragment>
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <Routes>
          <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/profile" element={<ProfilePage setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
            <Route exact path="/" element={<HomePage currentUser={currentUser}/>}/>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
