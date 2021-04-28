import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Input from "../../../Components/Input/Input";
import RadioInput from "../../../Components/RadioInput/RadioInput";

import "../OrderForm.css";



const FormStep2 = () => {



    const history = useHistory()
    const nextStep = ()=>{
        history.push('/order/step2')
    }
    const prevStep = ()=>{
        history.push('/order')
    }



    
  return (
    <div className="order-step-2">
      <Form className='order-step-2__form'>
        <h3 className='question'>Full body drawing ?</h3>
        <div className='full-body'>
            <din>
                <input name='fullBody' value={true} type= 'radio'></input>
                <label> yes</label>
            </din>
        
            <din>
                <input name='fullBody' value={false} type= 'radio'></input>
                <label> no</label>
            </din>
        </div>

      <h3 className='question'>Choose your portrait size!</h3>

      <div className='portrait-size'>
            <din>
                <input name='portraitSize' value='10/12' type= 'radio'></input>
                <label> 10/12 inch</label>
            </din>
        
            <din>
                <input name='portraitSize' value='12/14' type= 'radio'></input>
                <label> 12/14 inch</label>
            </din>

            <din>
                <input name='portraitSize' value='14/16' type= 'radio'></input>
                <label> 14/16 inch</label>
            </din>

            <din>
                <input name='portraitSize' value='16/20' type= 'radio'></input>
                <label> 16/20 inch</label>
            </din>
        </div>

        <Input 
            inputtype='textarea'
            name='commentToArtist'
            rows='7'
            label='write a comment to the artist'
            />

        <div>
            <Button clicked={prevStep} type='button' className='next-button'> previous</Button>
            <Button clicked={nextStep} type='button' className='prev-button'> Next</Button> 
         </div>  
        </Form>
    </div>
  );
};

export default FormStep2;
