import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Input from "../../../Components/Input/Input";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {step2Validation} from '../../../utils/validate';
import { useDispatch, useSelector } from "react-redux";
import {collectFormData} from '../../../redux-store/actions/orderActions';
import "../OrderForm.css";



const FormStep2 = () => {

    const dispatch = useDispatch();
    const orderData = useSelector((state) => state.collectOrderData);
    const { fullBody, portraitSize, commentToArtist} = orderData;

    console.log(fullBody)
/// handling form validation and submission 
const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    defaultValues: {fullBody:fullBody, portraitSize:portraitSize, commentToArtist:commentToArtist },
    resolver:yupResolver(step2Validation),
});


const prevStep = ()=>{
    history.push('/order')
}

const history = useHistory()
/// submit form
const submit = (data)=>{
    console.log(data)
    dispatch(collectFormData(data));
    history.push('/order/step3')
}

    
  return (
    <div className="order-step-2">
      <Form className='order-step-2__form' onSubmit={handleSubmit(submit)}>
        <h3 className='question'>Full body drawing ?</h3>
        <div className='full-body'>
            <p className='input-error'>{errors.fullBody?.message}</p>
            <div>
                <input
                name='fullBody'
                value= {true}
                type= 'radio'
                {...register('fullBody')}
                />
                <label> yes</label>
            </div>
        
            <div>
                <input
                name='fullBody'
                value={false} 
                type='radio'
                {...register('fullBody')}
                />
                <label> no</label>
            </div>
        </div>
        
        <h3 className='question'>Choose your portrait size!</h3>
        
        <div className='portrait-size'>
        <p className='input-error'>{errors.portraitSize?.message}</p>
            <div>
                <input
                name='portraitSize'
                value='10/12'
                type= 'radio'
                {...register('portraitSize')}
                />
                <label> 10/12 inch</label>
            </div>
        
            <div>
                <input
                name='portraitSize'
                value='12/14'
                type= 'radio'
                {...register('portraitSize')}
                />
                <label> 12/14 inch</label>
            </div>

            <div>
                <input
                name='portraitSize'
                value='14/16'
                type= 'radio'
                {...register('portraitSize')}
                />
                <label> 14/16 inch</label>
            </div>

            <div>
                <input
                name='portraitSize'
                value='16/20'
                type='radio'
                {...register('portraitSize')}
                />
                <label> 16/20 inch</label>
            </div>
        </div>

        <Input 
        inputtype='textarea'
        name='commentToArtist'
        rows='7'
        label='write a comment to the artist'
        {...register('commentToArtist')}
        />

        <div>
            <Button clicked={prevStep} type='button' className='next-button'> previous</Button>
            <Button type='summit' className='prev-button'> Next</Button> 
         </div>  
        </Form>
    </div>
  );
};

export default FormStep2;
