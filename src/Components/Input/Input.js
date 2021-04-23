import './Input.css';
import {forwardRef} from 'react';

const Input = forwardRef((props, ref)=>{
let inputElement = null;

switch (props.inputtype) {
    case 'text':
        inputElement= <input ref={ref}  {...props}  className= {`inputElement  ${props.className}`}   />
        break;
    case 'textarea':
            inputElement= <textarea ref={ref} {...props} className= {'inputElement ' +  props.className} />
            break;

    default: inputElement= <input ref={ref} {...props} className='inputElement' />
        break;
}



    return(
        <div className='input-wraper'>
         <label className='label' >{props.label}</label>
         {inputElement}
         <p className='input-error' >{props.errormessage}</p>
        </div>
    )
})


export default Input;