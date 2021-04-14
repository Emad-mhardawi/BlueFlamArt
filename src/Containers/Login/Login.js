import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux-store/actions/userActions";

import "./Login.css";
import { Redirect } from "react-router";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
 
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;


  /// redirect the user to home page when the user logged in 
  
  useEffect(()=>{
    if(userInfo){
      history.push('/')
    }
  },[history, userInfo])
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email: ${email}  password: ${password}`);
    dispatch(login(email, password));
  };


  return (
    <div className="login">
      <form className="login-form" onSubmit={submitHandler}>
        {loading ? <h1>loading</h1> : null}
        <h3 className="form-title"> Login to your account</h3>
        <Input
          inputtype="text"
          type="email"
          name="email"
          value={email}
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          inputtype="text"
          type="password"
          name="password"
          value={password}
          label="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot-password">forgot my password</p>
        <button type="submit" className="loggin-button">
          LOGIN
        </button>
        <hr className="form-divider" />
        <div className="create-acount-link">
          <p>
            Don' have an account? <a href="/home"> Create an account</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
