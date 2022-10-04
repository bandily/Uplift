import React, { useState, Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';

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
          {/* <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
          <Routes>
            <Route exact path="/" element={<HomePage currentUser={currentUser}/>}/>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
