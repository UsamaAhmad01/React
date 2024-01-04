import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./signUp.module.scss";

import userIcon from "../assets/person.png";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", formData.name)
    localStorage.setItem("email", formData.email)
    localStorage.setItem("password", formData.password)
    setFormData({
        name: "",
        email: "",
        password: "",})
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.header}>
        <div className={style.text}>Sign Up</div>
        <div className={style.underline}></div>
      </div>

      <div className={style.inputs}>
        <div className={style.input}>
          <img src={userIcon} alt="" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={style.input}>
          <img src={emailIcon} alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.input}>
          <img src={passwordIcon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={style.bottom}>
        <button type="submit" className={style.submit}>
          Sign up
        </button>
        <Link to="/">Already have an account? Sign in</Link>
      </div>
    </form>
  );
};

export default Signup;
