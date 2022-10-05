import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../Styling/HomePage.css'

function HomePage({currentUser}) {
    const history = useNavigate();

    return (
        <div id="container">
            <h1 className="first-phase">
                <span 
                    className="txt-rotate" 
                    data-period="2000" 
                    data-rotate='[ "Uplift."]'>
                </span>
            </h1>
            <div id="button-container">
                <button 
                    onClick={() => {
                        currentUser ? history("/profile") : history("/login")
                    }} 
                    className="button-30">
                    <span className="text">Enter</span>
                </button>
            </div>
        </div>
    )
}

export default HomePage;