import './Form.css';

const Form = (props)=>{
    return(
    <form noValidate {...props} className= {`form ${props.className}`}>
        {props.children}
    </form>
    )
}

export default Form;