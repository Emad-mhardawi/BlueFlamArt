import React, {useEffect, useState} from 'react'
import Input from "../../Components/Input/Input";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {authInputsValidation} from "../../utils/validate";
import { registerUser } from "../../redux-store/actions/userActions";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {

  /// bring register request result from redux store
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const [signup , setSignUp] = useState(false)

  // functions that come with react form hook
  // to handle input fields and form submission
  const {register,handleSubmit,formState: { errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(authInputsValidation),
  });

  /// when form is submitted inputs values will be sent
  /// to redux and dispatch an action to handle the login request.
  const submit = (data) => {
    dispatch(registerUser(data.username, data.email, data.password, data.confirmedPassword));
    if(!error){
      setSignUp(true)
    }
  };

  
  const history = useHistory();
  useEffect(()=>{
    if(signup === true){
      history.push('/login')
    }
  },[userInfo, history, setSignUp])

  return (
    <div className="signup">
      <Form className="login-form" onSubmit={handleSubmit(submit)}>
        {loading ? <h1>loading</h1> : null}
        {error && <h3 className="error-message">{error}</h3>} 
        <h3 className="form-title"> Create new account</h3>
        <Input
          inputtype="text"
          type="text"
          name="username"
          label="Username"
          placeholder="Choose your username"
          {...register("username")}
          errormessage={errors.username?.message}
          className={errors.username && "error"}
        />

        <Input
          className={errors.emailError && "error"}
          inputtype="text"
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          {...register("email")}
          errormessage={errors.email?.message}
          
        />

        <Input
          inputtype="text"
          type="password"
          name="password"
          label="password"
          placeholder="password"
          {...register("password")}
          errormessage={errors.password?.message}
          className={errors.password && "error"}
        />

        <Input
          inputtype="text"
          type="password"
          name="confirmedPassword"
          label="confirm password"
          placeholder=" Confirm your password"
          {...register("confirmedPassword")}
          errormessage={errors.confirmedPassword?.message}
          className={errors.confirmedPassword && "error"}
        />
        
        <Button type="submit" className="login-button">Register</Button>
        
        <hr className="form-divider" />

        <div className="create-acount-link">
          <p>
            Already have an account? <Link to ='/login'>Login</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
