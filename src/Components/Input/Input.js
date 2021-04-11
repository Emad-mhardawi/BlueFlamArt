import './Input.css';


const Input = (props)=>{
let inputElement = null;

switch (props.inputtype) {
    case 'text':
        inputElement= <input className= {`inputElement  ${props.className}`}  {...props} />
        break;
    case 'textarea':
            inputElement= <textarea  className= {'inputElement ' +  props.className}  {...props}  />
            break;

    default: inputElement= <input className='inputElement' {...props} />
        break;
}



    return(
        <div className='input-wraper'>
         <label className='label' >{props.label}</label>
         {inputElement}
        </div>
    )
}


export default Input;