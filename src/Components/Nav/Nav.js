import './Nav.css';
import {FaPhoneAlt, FaUser, FaFacebook, FaInstagramSquare, FaSnapchat} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import { useState } from 'react';

const Nav = (props)=>{

    const [authDropOpen, setAuthDropOpen] = useState(false)
    return(
        <nav className='nav'>
           <div className='nav-top'>
               <div className='nav-contact'>
               <p className='nav-contact-phonNumber'>076-167-xxx</p>
               <FaPhoneAlt className='phonNumber-icon'/>
               </div>
               <h2 className='logo'>Blue Flame</h2>


               <div className='nav-top__right'>


               <div onClick={()=>setAuthDropOpen(!authDropOpen)} className="nav-top__right-dropdown">
                       <FaUser />
                       {authDropOpen &&(<div className="dropdown-content">
                       <ul className='nav-bottom-links'>
               <li><NavLink exact to='/' className='nav-bottom-links__link'> Login</NavLink></li>
               <li><NavLink to='/about' className='nav-bottom-links__link'> Signup</NavLink></li>
               
               </ul>
                       </div>) }
                       
                    </div>


                   <p className='nav-top__right-order'>order now</p>

                   
               </div>
           </div>


           <div className='nav-bottom'>
               <MenuButton className={props.menuOpen && 'active'} clicked={props.toggle}/>
               <ul className='nav-bottom-links'>
               <li><NavLink exact to='/' className='nav-bottom-links__link'> Home</NavLink></li>
               <li><NavLink to='/about' className='nav-bottom-links__link'> About</NavLink></li>
               <li><NavLink to='/about' className='nav-bottom-links__link'> Contact</NavLink></li>
               <li><NavLink to='/about' className='nav-bottom-links__link'> Work</NavLink></li>
               </ul>
             
           </div>
        </nav>
    )
}


export default Nav;