import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    setMessage('Password reset instructions sent to your email');
  };

  return (
    <div className="account">
      <h2>Forgot Password</h2>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button 
        onClick={handleResetPassword}
        className="accountButton"
      >
        Submit
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;