import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import {
  FaFacebook,
  FaInstagramSquare,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";
import { Divider } from "@material-ui/core";

const Contact = () => {
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

        <Form className="contact-form">
          <Input inputtype="text" placeholder="Your Name" />

          <Input inputtype="text" placeholder="E-mail" />
          <div className="text-area">
            <Input inputtype="textarea" placeholder="Your Message" rows="9" />
          </div>

          <button>Send message</button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
