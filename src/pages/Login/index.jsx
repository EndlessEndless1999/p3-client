import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = useRef(null);

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);

    let data = JSON.stringify({
      username,
      password,
      "g-recaptcha-response": recaptchaRef.current.getValue(),
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://amazingapp.tplinkdns.com/users/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
          console.log(JSON.stringify(response.data));
          
      })
      .catch((error) => {
          // set error to this text
          console.log(error.response.data.error);
          recaptchaRef.current.reset();
      });

  };

  return (
    <div className="account">
      <h2>Login</h2>
      <div className="username">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <ReCAPTCHA ref={recaptchaRef} theme='dark' sitekey="6LfFmcsnAAAAAIxzLO5HlGhP8lONpoY9Z2r3Z2XU"/>
      <div className="g-recaptcha" data-sitekey="6LfFmcsnAAAAAIxzLO5HlGhP8lONpoY9Z2r3Z2XU"></div>
      <button 
        onClick={handleLogin}
        className="accountButton"
      >
        Login
      </button>

      <div>
        <NavLink to="/register">Haven't got an account? Register now!</NavLink>
        <br />
        <NavLink to="/forgot-password">Forgot password?</NavLink>
      </div>
    </div>
  );
};

export default Login;