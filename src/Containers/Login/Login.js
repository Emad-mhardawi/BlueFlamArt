import React from 'react';
import Input from '../../Components/Input/Input';
import './Login.css';


const Login = ()=>{
    return(
        
        <div className='login'>
            <form className='login-form'>
                <h3 className='form-title'> Login to your account</h3>
                <Input inputtype='text'  type='email' label='Email' placeholder='Enter your email'/>
                <Input inputtype='text' type='password'label='password' placeholder='password' />
                <p className='forgot-password'>forgot my password</p>
                <button type='submit' className='loggin-button'>LOGIN</button>
                <hr className='form-divider'/>
                <div className='create-acount-link'>
                    <p>Don' have an account?   <a href='/home'> Create an account</a></p>
                    
                </div>
            </form>

            
         

           

  
           
           
           
        </div>
        
    )
}


export default Login;

