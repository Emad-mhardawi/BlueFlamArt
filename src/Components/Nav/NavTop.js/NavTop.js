import React,{useState} from 'react';
import {FaPhoneAlt, FaUser, FaFacebook, FaInstagramSquare, FaSnapchat} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './NavTop.css';


const NavTop = (props)=>{

    const [authDropOpen, setAuthDropOpen] = useState(false)
    return(
        <div className='nav-top'>
        <div className='nav-contact'>
        <p className='nav-contact-phonNumber'>076-167-xxx</p>
        <FaPhoneAlt className='phonNumber-icon'/>
        </div>
        <h2 className='logo'>Blue Flame</h2>


        <div className='nav-top__right'>


        <div onClick={()=>setAuthDropOpen(!authDropOpen)} className="nav-top__right-dropdown">
                <FaUser />
                {authDropOpen &&(
                <ul className='nav-dropdown-list'>
                    <NavLink exact to='/login' className='nav-dropdown-link'> Login</NavLink>
                    <NavLink to='/signup' className='nav-dropdown-link'> Signup</NavLink>
                    
        
        </ul>
               ) }
                
             </div>


            <p className='nav-top__right-order'>order now</p>

            
        </div>
    </div>
        
    )
}


export default NavTop;