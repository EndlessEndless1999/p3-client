import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="login">
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
      <button onClick={handleLogin}>Login</button>

      <div>
        <NavLink to="/register">Haven't got an account? Register now!</NavLink>
        <br />
        <NavLink to="/forgot-password">Forgot password?</NavLink>
      </div>
    </div>
  );
};

export default Login;