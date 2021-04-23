import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux-store/actions/userActions";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../utils/validate';

import "./Login.css";
import { Redirect } from "react-router";

const Login = ({history}) => {

  // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(validationSchema)
  });
  
 

  const dispatch = useDispatch();
 
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;


  /// redirect the user to home page when the user logged in 
  
  useEffect(()=>{
    if(userInfo){
      history.push('/')
    }
  },[history, userInfo])
  

  const submit = (data) => {
    dispatch(login(data.email, data.password));
  };

  console.log(errors)

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        {loading ? <h1>loading</h1> : null}
        <h3 className="form-title"> Login to your account</h3>
        <Input
          inputtype="text"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          {...register('email')}
          
        />
        <Input
          inputtype="text"
          type="password"
          name="password"
          label="password"
          placeholder="password"
          {...register('password')}
          
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
