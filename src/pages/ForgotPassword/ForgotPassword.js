import Input from "../../Components/Input/Input";
import Form from "../../Components/Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidation } from "../../utils/validate";
import "./ForgotPassword.css";
import Button from "../../Components/Button/Button";
import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [message , setMessage] = useState('')
  const [error , setError] = useState('')

  const { register, handleSubmit, formState: { errors },} = useForm({
    mode: "onBlur",
    resolver: yupResolver(emailValidation),
  });

  const submit = async (data) => {
    const email = data.email;
    try {
      const response = await axios.post(
        "http://localhost:5000/forgotPassword",
        { email: email }
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
    <div className="forgotPassword">
      <Form className="forgotPassword-form" onSubmit={handleSubmit(submit)}>
        {error && <h4 className='error-message'>{error}</h4>}
        {message && <h4 className='success-message'>{message}</h4>}
        <h2>Password Recovery</h2>
        <p>Tell us your email so we can send you a reset link</p>
        <Input
          inputtype="text"
          name="email"
          placeholder="enter your email"
          {...register("email")}
          errormessage={errors.email?.message}
          className={errors.email && "error"}
        />

        <Button type="submit">Recover password</Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
