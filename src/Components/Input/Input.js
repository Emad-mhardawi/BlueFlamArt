import './Input.css';


const Input = (props)=>{
let inputElement = null;

switch (props.inputtype) {
    case 'text':
        inputElement= <input  {...props}  className= {`inputElement  ${props.className}`}   />
        break;
    case 'textarea':
            inputElement= <textarea {...props} className= {'inputElement ' +  props.className} />
            break;

    default: inputElement= <input {...props} className='inputElement' />
        break;
}



    return(
        <div className='input-wraper'>
         <label className='label' >{props.label}</label>
         {inputElement}
         <p className='error-message' >{props.errormessage}</p>
        </div>
    )
}


export default Input;