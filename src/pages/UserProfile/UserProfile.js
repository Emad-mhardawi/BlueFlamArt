import './UserProfile.css';
import Form from '../../Components/Form/Form';
import Input from '../../Components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import {getUserDetails} from '../../redux-store/actions/userActions';
import { useEffect, useState } from 'react';
import {useHistory } from 'react-router-dom'
import Button from '../../Components/Button/Button';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {authInputsValidation} from '../../utils/validate';

const UserProfile = ()=>{
    
    const userDetails = useSelector((state)=>state.userDetails);
    const {loading, error, user} = userDetails;
    const userLogin = useSelector((state)=>state.userLogin);
    const {userInfo} = userLogin;
    
   

    // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
      defaultValues:{username:user.username, email:user.email},
    mode:'onBlur',
    resolver:yupResolver(authInputsValidation)
  });


  let dispatch =  useDispatch() 
  const history = useHistory()
  useEffect(()=>{
      if(!user.email){
         dispatch(getUserDetails('profile')) 
        }
      
  },[dispatch, history, user])

  
    

    const submit = (data) => {
        //// dispatch update profile
        //dispatch(login(data.email, data.password));
        console.log(data)
      };

    return(
        <div className='userProfile'>
            <div className='userProfile-container'>
                <div className='user-info'>
                    <Form className='user-info-form' onSubmit={handleSubmit(submit)}>
                        <h2>User Profile</h2>
                        <Input
                        type='text'
                        label='Username'
                        name='username'
                        {...register("username")}
                        />

                        <Input
                        type='text'
                        label='Email'
                        name='email'
                        {...register("email")}
                        errormessage={errors.email?.message}
                        className={errors.email && "error"}
                        />

                        <Input
                        type='text'
                        label='Password'
                        name='password'
                        {...register("password")}
                        errormessage={errors.password?.message}
                        className={errors.password && "error"}
                        />

                        <Input
                        type='text'
                        label='Confirm Password'
                        name='confirmedPassword'
                        {...register("confirmedPassword")}
                        errormessage={errors.confirmedPassword?.message}
                        className={errors.confirmedPassword && "error"}
                        />

                        <Button type='submit' className='user-info-updateButton'>Edit</Button>

                    </Form>
                </div>
                <div className='user-order'>
                    <h2>Orders</h2>
                </div>
            </div>
        </div>
    )
}


export default UserProfile;