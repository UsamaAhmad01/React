import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from"./loginPage.module.scss";
import { useNavigate } from 'react-router';


import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      email: "",
      password: "",
    });

    if( localStorage.getItem("email") === formData.email && 
      localStorage.getItem("password") === formData.password
    ){
      navigate("/welcome")
    } else {
      alert("Wrong credentials")
    }
  };

  return (
    <form 
      className={style.container}
      onSubmit={handleSubmit}>
      <div className={style.header}>
        <div className={style.text}>Sign in</div>
        <div className={style.underline}></div>
      </div>
      <div className={style.inputs}>
        <div className={style.input}>
          <img src={emailIcon} alt="" />
          <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
        </div>
        <div className={style.input}>
          <img src={passwordIcon} alt="" />
          <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
        </div>
        <div className={style.forgot_password}>
          Forgot Password? <span>Click Here!</span>
        </div>
      </div>
      <div className={style.bottom}>
        <button className={style.submit}>Sign in</button>
        <Link to="/signup">Create a new Account</Link>
      </div>
    </form>
  );
};

export default Login;
