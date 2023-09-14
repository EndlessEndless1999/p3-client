import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = useRef(null);

  const handleRegister = () => {
    console.log(`Registering with email: ${email}, username: ${username}, and password: ${password}`);

    let data = JSON.stringify({
      username: username,
      password: password,
      email: email,
      "g-recaptcha-response": recaptchaRef.current.getValue(),
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      // TODO: global url
      url: 'https://amazingapp.tplinkdns.com/users/register',
      headers: { 
        'Content-Type': 'application/json',
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
          console.log(JSON.stringify(response.data));
          if(response.data.status === "success" ){
            // user registered
            alert("User registered!");
          }
      })
      .catch((error) => {
          // set error to this text
          console.log(error.response.data.error);
          recaptchaRef.current.reset();
      });

      
  };

  return (
    <div className="account">
      <h2>Register</h2>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
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
      
      <button 
        onClick={handleRegister}
        className="accountButton"
      >
        Register
      </button>
      
      <div>
        <NavLink to="/login">Already got an account? Login!</NavLink>
      </div>
    </div>
  );
};

export default Register;