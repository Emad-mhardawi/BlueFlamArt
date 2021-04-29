import './RadioInput.css';
import {forwardRef} from 'react';

const RadioInput = forwardRef((props, ref)=>{
return (
  <label className={`radio-label ${props.className}`} >
      <input {...props} ref={ref} className={`radio-button ${props.className}`} type='radio'/>
      <img className='radio-button-image' src={props.image}/>
      <div className='portrait-details'>
        <p className='portrait-price'>{props.price}</p>
        <h3 className='portrait-style'>{props.value}</h3>
      </div>
      
  </label>
)
})

export default RadioInput;