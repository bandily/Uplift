import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../Styling/NavBar.css'

const linkStyles = {
    display: "inline-block",
    width: "fit-content",
    padding: "2px 12px 7px 12px",
    margin: "6px",
    background: "white",
    textDecoration: "none",
    color: "black",
    borderRadius: "20px",
    textAlign: "center",
    border: "transparent",
    height: "fit-content",
};

function NavBar({setCurrentUser, currentUser}) {
    const history = useNavigate()

    function handleClick() {
        history("/");
        window.location.reload();
    }

    function logout() {
        fetch("/logout", {method: "DELETE"}).then((res) => {
            if (res.ok) {
                setCurrentUser(null);
                window.location.assign("/")
            }
        })
    }
    return (
        <div id="navbar">
            <NavLink to="/" exact>
                <a href="/" style={{height: "55px", fontFamily: "Assistant", color:"white", fontSize:"30px", textDecoration: "none",}}>Uplift.</a>
            </NavLink>

            {currentUser ? (
            
            <div className="logged-in-nav">
                <div className="greeting">
                <p className="logged">logged in as <strong>{currentUser.username}</strong></p>
                </div>
                    <a href="/profile"><img className="nav-icon" src={currentUser.Avatar !== null ? currentUser?.avatar?.image : null} alt="icon"></img></a>
                <NavLink
                    className="login-button"
                    to="/new-log"
                    exact
                    style={linkStyles}
                    > Add log
                </NavLink>
                <NavLink
                    className="login-button"
                    onClick={logout}
                    to="/"
                    exact
                    style={linkStyles}
                    > Logout
                </NavLink>
            </div>
            ) : null}

            {currentUser !== null ? (
                <div className="buttons">
                    <NavLink
                        className="login-button"
                        to="/login"
                        exact
                        style={linkStyles}
                        > Login
                    </NavLink>

                    <NavLink
                        className="signup-button"
                        to="/signup"
                        exact
                        style={linkStyles}
                        > Signup
                    </NavLink>
                </div>) :null}
        </div>
    )
}

export default NavBar;
