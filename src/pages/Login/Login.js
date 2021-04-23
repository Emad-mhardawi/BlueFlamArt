import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux-store/actions/userActions";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../utils/validate';
import "./Login.css";
import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";
import { useEffect } from "react";


const Login = () => {

  /// bring login request result from redux store
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(validationSchema)
  });
  
  /// when form is submitted inputs values will be sent
  /// to a redux and dispatch an action to handle the login request
  const submit = (data) => {
    dispatch(login(data.email, data.password));
  };
  
  /// if login request succeed and user info
  // stored in redux store redirect user to home page
  const history = useHistory();
  useEffect(()=>{
    userInfo && history.push('/')
  },[userInfo])

  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleSubmit(submit)}>
        {loading ? <h1>loading</h1> : null}
        {error && <h3 className="error-message">{error}</h3>}
        <h3 className="form-title"> Login to your account</h3>
        <Input
          inputtype="text"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          errormessage={errors.email?.message}
          className={errors.email && "error"}
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
        <p className="forgot-password">forgot my password</p>
        <Button type="submit" className="login-button">
          LOGIN
        </Button>
        <hr className="form-divider" />
        <div className="create-acount-link">
          <p>
            Don' have an account? <a href="/home"> Create an account</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
