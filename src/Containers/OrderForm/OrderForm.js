
import { Switch, Route } from "react-router-dom";
import './OrderForm.css';

import FormStep1 from './FormSteps/FormStep1';
import FormStep2 from './FormSteps/FormStep2';
import FormStep3 from './FormSteps/FormStep3';
import OverView from './FormSteps/OverView';





const OrderForm = ()=>{



    return(
      <div className='order-form'>
          <Switch>
            <Route exact  path='/order' component={FormStep1}/>
            <Route exact  path='/order/step2' component={FormStep2}/>
            <Route exact  path='/order/step3' component={FormStep3}/>
            </Switch>
    
      </div>
      
       
      
    )
}

export default OrderForm;


/* <Route exact  path='/order/overview' component={OverView}/>*/