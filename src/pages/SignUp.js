import React, { useState } from "react";
import "../style/sign-up.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    role: ["none"],
    username: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  });
  const [message, setMessage] = useState("");
  //let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRole = (e) => {
    e.preventDefault();
    data.role[0] = e.target.value;
  };

  const checkUser = async () => {
    const response = await fetch("http://34.125.6.179:8890/users/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const user = await response.json();

    if (user.find((user) => user.username === data.username)) {
      setMessage("Username already exists");
    } else if (user.find((user) => user.email === data.email)) {
      setMessage("Email already exists");
    }
  };

  const registerUser = async () => {
    if (data.password === data.passwordConfirmed) {
      const response = await fetch("http://34.125.6.179:8890/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          role: data.role,
          password: data.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      console.log(json);
      // navigate("/login");
    } else {
      setMessage("Passwords do not match");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    registerUser();
    checkUser();
  };

  return (
    <div class="signup-form">
      <form
        onSubmit={(event) => {
          handleSignup(event);
        }}
      >
        <h1 className="text-center">Sign Up</h1>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={(event) => {
              handleChange(event);
            }}
            required="required"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(event) => {
              handleChange(event);
            }}
            required="required"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(event) => {
              handleChange(event);
            }}
            required="required"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            className="form-control"
            name="passwordConfirmed"
            placeholder="Confirm Password"
            value={data.passwordConfirmed}
            onChange={(event) => {
              handleChange(event);
            }}
            required="required"
          />
          <span className="text-danger">{message}</span>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="role1"
            value="user"
            checked
            onChange={(event) => {
              handleRole(event);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Customer
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="role2"
            value="mod"
            checked
            onChange={(event) => {
              handleRole(event);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Restaurant
          </label>
        </div>

        <div class="form-group">
          <label class="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Sign Up
          </button>
        </div>
      </form>
      <div class="text-center">
        Already have an account?
        <Link to="/login"> Log in</Link>
      </div>
    </div>
  );
};

export default SignUp;
