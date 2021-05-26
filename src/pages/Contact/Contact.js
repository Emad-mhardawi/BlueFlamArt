import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import { FaFacebook, FaInstagramSquare, FaSnapchat } from "react-icons/fa";
import "./Contact.css";
import { Divider } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {contactFormValidation} from "../../utils/validate";
import axiosInstance from '../../helpers/axios';
import { useState } from "react";
import Modal from '../../Components/modal/Modal'
import BackDrop from '../../Components/Backdrop/Backdrop'



const Contact = () => {

// functions that come with react form hook
  // to handle input fields and form submission
  const {register,handleSubmit,formState: { errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(contactFormValidation),
  });

  const [isMessageSend, setIsMessageSend] = useState('')
 
  const submit = async (data) => {
    setIsMessageSend('')
    const response = await axiosInstance.post('/contact', data)
    const message = await response.data;
    setIsMessageSend(message)
    console.log(isMessageSend)
    
  };


  return (
    <div className="Contact">
      <div className="contact-header">
        <h3>Contact</h3>
      </div>
      <div className="Contact-body">
        <div className="contact-title">Get In Touch</div>
        <div className="contact-information">
          <div className="get-social">
            <h4>GET SOCIAL</h4>
            <div>
              <FaFacebook />
              <FaInstagramSquare />
              <FaSnapchat />
            </div>
          </div>
          <Divider />
          <div className="phone">
            <h4>PHONE</h4>
            <p>076-167-xxx</p>
          </div>
          <Divider />
          <div className="address">
            <h4>ADDRESS</h4>
            <p>Bryggartorps gatan, 65214, Eskilstuna</p>
          </div>
          <Divider />
          <div className="opening-houres">
            <h4>OPENING HOURS</h4>
            <p>We work every day 9:00–23:00</p>
          </div>
        </div>

        <p className="contact-description">
          We are available 24/7 by e-mail or by phone. You can also use my quick
          contact form to ask a question about our services. We would be more
          than happy to answer your questions.
        </p>

        <Form className="contact-form" onSubmit={handleSubmit(submit)}>
          <Input inputtype="text"
          placeholder="Your Name"
          name='username'
          {...register("username")}
          errormessage={errors.username?.message}
          className={errors.username && "error"}
          />

          <Input inputtype="text"
            placeholder="E-mail"
            name='email'
          {...register("email")}
          errormessage={errors.email?.message}
          className={errors.email && "error"}
          />
          <div className="text-area">
            <Input inputtype="textarea"
            placeholder="Your Message"
            rows="9"
            name='message'
          {...register("message")}
          errormessage={errors.message?.message}
          className={errors.message && "error"}
            />
          </div>

          <button type='submit'>Send message</button>
        </Form>
      </div>
      {isMessageSend &&
        <BackDrop>
          <Modal clicked={()=>setIsMessageSend('')} >
            {isMessageSend}
          </Modal>
       </BackDrop>}
      
    </div>
  );
};

export default Contact;
