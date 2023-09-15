import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef(null);

  const handleResetPassword = () => {
    let data = JSON.stringify({
      email,
      "g-recaptcha-response": recaptchaRef.current.getValue(),
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://amazingapp.tplinkdns.com/users/reset",
      headers: {
        "Content-Type": "application/json",
        Cookie: "authorization=4e60eac3-7ab3-430c-88d8-76b24354438b",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.status === 200){
          setMessage("Password reset instructions sent to your email: "+ response.data.emailClient);
        } else {
          setMessage(data.error)
        }
        
      })
      .catch((error) => {
        setMessage(error.response.data.error);
      });
      
      recaptchaRef.current.reset();
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

      <ReCAPTCHA
        className="recaptcha"
        ref={recaptchaRef}
        theme="dark"
        sitekey="6LfFmcsnAAAAAIxzLO5HlGhP8lONpoY9Z2r3Z2XU"
      />

      <button onClick={handleResetPassword} className="accountButton">
        Submit
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
