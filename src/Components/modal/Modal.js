import { PinDropSharp } from '@material-ui/icons';
import './Modal.css'

const Modal =(props)=>{
return(
    <div className='modal'>
        {props.children}
    </div>
)

}

export default Modal;