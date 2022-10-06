import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Styling/Signup.css'

function Signup({ setCurrentUser }) {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goalWeight, setGoalWeight] = useState(0);
  const [error, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        age,
        weight,
        gender,
        goal_weight: goalWeight,
      }),
    }).then(res => {
      if (res.ok) {
        res.json().then(user => {
          return fetch("/new-avatar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mouth: 0,
              eyes: 0,
              hair: 0,
              skinColor: 0,
              hairColor: 0,
              accessory: 0,
              image: "https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=openedSmile&eyes[]=cheery&hair[]=shortHair&accessories[]=catEars&skinColor[]=variant01&hairColor[]=variant01",
              user_id: user.id,
            }),
          }).then((res) => {
            if (res.ok) {
              res.json().then((data) => {
                setCurrentUser(data);
                history("/avatar");
              });
            } else {
              res.json().then((errors) => {
                setError(errors.errors);
              });
            }
          });
        });
      } else {
        res.json().then((errors) => {
          setError(errors.errors);
        });
      }
    });
  };

  const errorList = error.map((errorr_message) => <p>{errorr_message}</p>)

  return (
    <div className="authForm">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1
          style={{ marginBottom: "30px", marginTop: "50px", fontSize: "40px", fontFamily: "Assistant" }}
        >
          SIGN UP
        </h1>
        <p className="please-log">Please enter your username and password.</p>

        <p>
          <label htmlFor="username" style={{ marginRight: "5px" }}>
            Username
          </label>
          <input
            type="text"
            className="signup-entry"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="password" style={{ marginRight: "10px" }}>
            Password
          </label>
          <input
            type="password"
            className="signup-entry"
            name=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="age" style={{marginLeft: "-320px"}}>
            Age
          </label>
          <input
            type="number"
            min="0"
            max="99"
            className="signup-entry-age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            autoComplete="off"
          />
        </p>
        <p
          style={{
            position: "relative",
            top: "-68px",
            left: "210px",
            width: "150px",
          }}
        >
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            min="0"
            max="999"
            className="signup-entry-weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            autoComplete="off"
          />
        </p>
        <p
          style={{
            position: "relative",
            top: "-137px",
            left: "365px",
            width: "180px",
          }}
        >
          <label htmlFor="weight">Goal Weight</label>
          <input
            type="number"
            min="0"
            max="999"
            className="signup-entry-weight"
            name="weight"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
            autoComplete="off"
          />
        </p>
        <p style={{ marginTop: "-110px" }}>
          <input
            type="radio"
            label="Male"
            className="signup-entry-gender"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="radio"
            label="Female"
            className="signup-entry-gender"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="radio"
            label="Other"
            className="signup-entry-gender"
            name="gender"
            value="Other"
            onChange={(e) => setGender(e.target.value)}
          />
        </p>

        <div className="error-signup">{errorList}</div>
        <p>
          <button className="post-button" type="submit">
            SIGN UP
          </button>
        </p>
        <p style={{ marginTop: "49px" }}>
          Already have an account?
          <button className="no-account">
            <Link to="/login" className="no-account">
              <strong className="signlog">Log In</strong>
            </Link>
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
