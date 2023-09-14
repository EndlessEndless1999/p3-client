import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    setMessage('Password successfully reset.');
  };

  return (
    <div className="account">
      <h2>Reset Password</h2>
      <div className="password">
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="password">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button 
        onClick={handleResetPassword}
        className="accountButton"
      >
        Reset
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;