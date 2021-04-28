import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";
import Form from "../../../Components/Form/Form";
import Input from "../../../Components/Input/Input";
import RadioInput from "../../../Components/RadioInput/RadioInput";
import Spinner from "../../../Components/Spinner/Spinner";
import "../OrderForm.css";



const FormStep1 = () => {
const [portraits, setPortraits] = useState({
    loading: true,
    portraits:[]
})


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
    const nextStep = ()=>{
        history.push('/order/step2')
    }

    
  return (
    <div className="order-step-1">
      <Form className='order-step-1__form'>
          <Input inputtype ='text' label='Give your portrait a special name!'/>
          <h3 className='question'>Choose your Style</h3>
          <div className='artStyles-container'>
              {portraits.loading ===true ?<Spinner/>:
              portraits.portraits.map((item)=>(
              <RadioInput
                    id={item._id} 
                    name='portraitStyle' 
                    value={item.portraitStyle}
                    image={item.image}
                    price={item.price}
                    />
                    ))}
              </div>
              <Button clicked={nextStep} type='button' className='next-button'> Next</Button>
        </Form>
    </div>
  );
};

export default FormStep1;
