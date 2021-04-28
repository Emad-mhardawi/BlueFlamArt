import './RadioInput.css'

const RadioInput = (props)=>{
return (
  <label className='radio-label'>
      <input {...props} className={`radio-button ${props.className}`} type='radio' name='test'/>
      <img className='radio-button-image' src={props.image}/>
      <div className='portrait-details'>
        <p className='portrait-price'>{props.price} $</p>
        <h3 className='portrait-style'>{props.value}</h3>
      </div>
      
  </label>
)
}

export default RadioInput;