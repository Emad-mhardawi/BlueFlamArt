import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Input from "../../../Components/Input/Input";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {step2Validation} from '../../../utils/validate';
import ImageUpload from '../../../Components/imageUpload/imageUpload'
import "../OrderForm.css";



const FormStep3 = () => {

/// handling form validation and submission 
const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(step2Validation)
});





    
  return (
    <div className="order-step-2">
      <Form className='order-step-2__form' >
       <h3>please provide a high quality image for better results in JPG , JPEG, oR PNG format </h3>
       <ImageUpload id ='image'/>
       <div>
            <Button  type='button' className='next-button'> previous</Button>
            <Button  type='summit' className='prev-button'> Next</Button> 
         </div>  
        </Form>
    </div>
  );
};

export default FormStep3;
