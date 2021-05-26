import './Modal.css'
import { FaRegWindowClose } from "react-icons/fa";

const Modal =(props)=>{
return(
    <div className='modal'>
        <FaRegWindowClose className='modal-close' onClick={props.clicked} />
        {props.children}
        
    </div>
)

}

export default Modal;

