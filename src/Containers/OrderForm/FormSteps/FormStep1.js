import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Input from "../../../Components/Input/Input";
import RadioInput from "../../../Components/RadioInput/RadioInput";
import Spinner from "../../../Components/Spinner/Spinner";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {step1Validation} from '../../../utils/validate';
import "../OrderForm.css";
import { useDispatch, useSelector } from "react-redux";
import {collectFormData} from '../../../redux-store/actions/orderActions';

const FormStep1 = () => {

/// save portraits that have been fetched from data base
const [portraits, setPortraits] = useState({
    loading: true,
    portraits:[]
})

const dispatch = useDispatch();
const orderData = useSelector((state) => state.collectOrderData);
const {portraitName , portraitStyle } = orderData;

/// handling form validation and submission 
const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    defaultValues: {portraitName:portraitName, portraitStyle:portraitStyle},
    resolver:yupResolver(step1Validation)
});


useEffect(()=>{
    getPortraits()
},[])

/// fetch portraits from server and save them in state
const getPortraits = async ()=>{
    const response = await axios.get('http://localhost:4000/portraits');
    const portraits = await response.data;
    setPortraits({
        loading: false,
        portraits: portraits
    })
}


const history = useHistory()
/// submit form
const submit = (data)=>{
    console.log(data)
    dispatch(collectFormData(data));
    history.push('/order/step2')
}

   
    
  return (
  <div className="order-step-1" >
      <Form className='order-step-1__form' onSubmit={handleSubmit(submit)}>
          <Input
            inputtype ='text'
            label='Give your portrait a special name!'
            name='portraitName'
            {...register('portraitName')}
            className={errors.portraitName && 'error'}
            errormessage= {errors.portraitName?.message}
          />

          <h3 className='question'>Choose your Style</h3>

          <div className='artStyles-container'>
              {portraits.loading ===true ?<Spinner/>:
              portraits.portraits.map((item)=>(
              <RadioInput
                    key={item._id} 
                    id={item._id} 
                    name='portraitStyle'
                    value={item.portraitStyle}
                    image={item.image}
                    price={item.price}
                    {...register('portraitStyle')}
                    />
                    ))}
              </div>
              <p className='input-error'>{errors.portraitStyle?.message}</p>
              <Button type='submit' className='next-button'> Next</Button>
        </Form>
    </div>
  );
};

export default FormStep1;
