import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  const [accountText, setaccountText] = useState(false);

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="text">
            {accountText === false ? "Sign in" : "Sign Up"}
          </div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {accountText === false ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {accountText === false && (
            <div className="forgot-password">
              Forgot Password? <span>Click Here!</span>
            </div>
          )}
        </div>

        <div className="submit-container">
          <button className="submit">
            {accountText === false ? "Sign in" : "Sign up"}
          </button>
          <div
            className="create-account"
            onClick={() => {
              setaccountText(accountText === false ? true : false);
            }}
          >
            {accountText === false ? (
              <p>
                Create a new <span>Account</span>
              </p>
            ) : (
              <p>
                Already have an account? <span>Sign in</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
