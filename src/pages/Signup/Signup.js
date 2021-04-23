import { useState } from 'react';
import Input from '../../Components/Input/Input';
import "./Signup.css";
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux-store/actions/userActions';
import validate from '../../utils/validate';

const Signup = () => {

    const dispatch = useDispatch()
    const [errors, setErrors]= useState({});

    const [inputs, setInputs ] = useState({
        username:'',
        email:'',
        password:'',
        confirmedPassword:''
    })

    const changeHandler = (e)=>{
        const value= e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        })
        
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setErrors(validate(inputs))
          dispatch(register(inputs.username, inputs.email , inputs.password, inputs.confirmedPassword));
        
        
        
        
        
    }

   
console.log(errors)
   

  return (
    <div className="signup">
       <form className="login-form" onSubmit={submitHandler}>
        
        <h3 className="form-title"> Create new account</h3>
        <Input
          inputtype="text"
          type="text"
          name="username"
          value={inputs.username}
          label="Username"
          placeholder="Choose your username"
          onChange ={changeHandler}
  
        />
        <Input
          className ={errors.emailError && 'error'}
          errormessage ={errors.emailError}
          inputtype="text"
          type="email"
          name="email"
          value={inputs.email}
          label="Email"
          placeholder="Email"
          
          onChange ={changeHandler}
        />
        <Input
          className ={errors.passwordError && 'error'}
          errormessage ={errors.passwordError}
          inputtype="text"
          type="password"
          name="password"
          value={inputs.password}
          label="password"
          placeholder="password"
          onChange ={changeHandler}
          
        />
        
        <Input
          className ={errors.confirmedPasswordError && 'error'}
          errormessage ={errors.confirmedPasswordError }
          inputtype="text"
          type="password"
          name="confirmedPassword"
          value={inputs.confirmedPassword}
          label="confirm password"
          placeholder=" Confirm your password"
          onChange ={changeHandler}
          
        />
        
        <button type="submit" className="loggin-button">
          Register
        </button>
        <hr className="form-divider" />
        <div className="create-acount-link">
          <p>
            Allready have an account? <a href="/home">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
