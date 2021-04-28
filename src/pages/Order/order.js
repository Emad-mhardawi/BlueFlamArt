import React from 'react';
import OrderForm from '../../Containers/OrderForm/OrderForm';
import './Order.css';



const Order = ()=>{
    return(
        <React.Fragment>
            <h1 className='order-form__title'>1/4</h1>
            <OrderForm/>
        </React.Fragment>
    )
}

export default Order;