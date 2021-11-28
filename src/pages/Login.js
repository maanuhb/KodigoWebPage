import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/sign-up.css";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://34.125.6.179:8890/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //credentials: 'include',
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (data.accessToken) {
     localStorage.setItem("token", data.accessToken);
      navigate("/");
    } else {
    setErrorMessage("email or password incorrect");
    }
  }
    // if (!(body.length === 0)) {
    //   setMessage(
    //     <span className="text-success text-center">Login successful</span>
    //   );
      
    // } else {
    //   setMessage(<span className="text-danger text-center">Login failed</span>);
    // }


  const responseGoogle = (response) =>  {
    navigate("/");
    const data = response.profileObj;;
    console.log(data);
  };


  return (
    <React.Fragment>
      <div class="signup-form">
        <form onSubmit={(event) => {
          handleSubmit(event);
        }}>
          <h1 className="text-center">Log in</h1>
          <div className="text-center pt-3">
            <GoogleLogin
              clientId="685773016099-07nrb489gep4e8513phef2m0pu3rbsr5.apps.googleusercontent.com"
              buttonText="Continue with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="btn text-light"
            />
          </div>
          <div className="div-separator">
            <div className="div-intermediate"></div>
          </div>

          {/* Email starts */}
          <div className="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={(event) => {
                handleChange(event);
              }}
              required="required"
            />
          </div>
          {/* Email ends */}

          {/* Password starts */}
          <div className="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(event) => {
                handleChange(event);
              }}
              required="required"
            />
          </div>
          {/* Password ends */}

          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> Remember me
            </label>
            <a href="/" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <span className="text-danger">{errorMessage}</span>
        </form>
        <div class="text-center">
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </div>
      </div>
      {/*Modal HTML*/}
    </React.Fragment>
  );
};
export default Login;
