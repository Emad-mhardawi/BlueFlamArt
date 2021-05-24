import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordsValidation } from "../../utils/validate";
import "./ResetPassword.css";
import Button from "../../Components/Button/Button";
import axios from "axios";
import { useState } from "react";
import qs from 'qs';


const ResetPassword = (props) => {
  const [message , setMessage] = useState('')
  const [error , setError] = useState('')

  const { register, handleSubmit, formState: { errors },} = useForm({
    mode: "onBlur",
    resolver: yupResolver(passwordsValidation),
  });

  const submit = async (data) => {
   console.log(data)

   const resetTokenFromQuery = qs.parse(props.location.search, { ignoreQueryPrefix: true }).resetToken
   const email = data.email;
    try {
      const response = await axios.post(
        `http://localhost:5000/resetPassword?resetToken=${resetTokenFromQuery}`,
        {    password: data.password,
            confirmedPassword: data.confirmedPassword
         }
      );
      const message = await response.data.message;
      setError('')
      setMessage(message)
    } catch (err) {
      setMessage('')
      setError(err.message)
    }
  };

  return (
    <div className="resetPassword">
      <Form className="resetPassword-form" onSubmit={handleSubmit(submit)}>
        {error && <h4 className='error-message'>{error}</h4>}
        {message && <h4 className='success-message'>{message}</h4>}
        <h2>Reset your password </h2>
        
        <Input
          type='password'
          name="email"
          placeholder="new password"
          {...register("password")}
          errormessage={errors.password?.message}
          className={errors.password && "error"}
        />

        <Input
           type="password"
          name="confirmedPassword"
          placeholder="Confirm new password"
          {...register("confirmedPassword")}
          errormessage={errors.confirmedPassword?.message}
          className={errors.confirmedPassword && "error"}
        />

        <Button type="submit">Reset Password</Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
