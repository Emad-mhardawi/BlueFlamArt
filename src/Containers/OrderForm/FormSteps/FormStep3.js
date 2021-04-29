import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {step3Validation} from '../../../utils/validate';
import { useSelector } from "react-redux";
import ImageUpload from '../../../Components/imageUpload/imageUpload'
import "../OrderForm.css";



const FormStep3 = () => {



const orderData = useSelector((state) => state.collectOrderData);
    const { image} = orderData;
/// handling form validation and submission 
const {handleSubmit, formState: { errors } } = useForm({
    defaultValues: {image:image },
    mode: 'onBlur',
    resolver:yupResolver(step3Validation),
});



const history = useHistory();
const submit = (data)=>{
    history.push('/order/checkout')
}

const prevStep = ()=>{
    history.push('/order/step2')
}
    
  return (
    <div className="order-step-2">
      <Form className='order-step-2__form' onSubmit={handleSubmit(submit)} >
       <h3>please provide a high quality image for better results in JPG , JPEG, oR PNG format </h3>
       <p className='input-error'>{errors.image?.message}</p>
       <ImageUpload
       type='file'
       id ='image'
       name='image'
       />
       <div>
            <Button clicked = {prevStep}  type='button' className='next-button'> previous</Button>
            <Button  type='summit' className='prev-button'> Next</Button> 
            
         </div>  
        </Form>
        
    </div>
  );
};

export default FormStep3;
