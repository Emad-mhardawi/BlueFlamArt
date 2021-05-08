import "./UserProfile.css";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import OrdersTable from '../../Containers/ordersTable/orderTable';
import { getUserDetails, updateUserProfile } from "../../redux-store/actions/userActions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authInputsValidation } from "../../utils/validate";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const updatedUser = useSelector((state) => state.userUpdateProfile);
  
 
  
  // functions that come with react form hook
  // to handle input fields and form submission
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: user.username, email: user.email },
    mode: "onBlur",
    resolver: yupResolver(authInputsValidation),
  });

  let dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
      dispatch(getUserDetails("profile"));
    
  },[dispatch]);

  const submit = (data) => {
    //// dispatch update profile
    dispatch(updateUserProfile(data))
   
   
  };

  return (
    <div className="userProfile">
      <div className="userProfile-container">
        <div className="user-info">
          <Form className="user-info-form" onSubmit={handleSubmit(submit)}>
                {updatedUser.success && <h3 className="success-message ">profile updated</h3>} 
              {updatedUser.error && <h3 className="error-message">{error}</h3>} 
            <h2>User Profile</h2>
            <Input
              type="text"
              label="Username"
              name="username"
              {...register("username")}
            />

            <Input
              type="text"
              label="Email"
              name="email"
              {...register("email")}
              errormessage={errors.email?.message}
              className={errors.email && "error"}
            />

            <Input
              type="password"
              label="Password"
              name="password"
              {...register("password")}
              errormessage={errors.password?.message}
              className={errors.password && "error"}
            />

            <Input
              type="password"
              label="Confirm Password"
              name="confirmedPassword"
              {...register("confirmedPassword")}
              errormessage={errors.confirmedPassword?.message}
              className={errors.confirmedPassword && "error"}
            />

            <Button type="submit" className="user-info-updateButton">
              Edit
            </Button>
          </Form>
        </div>
        <div className="user-order">
          <h2>Orders</h2>
          <OrdersTable/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
