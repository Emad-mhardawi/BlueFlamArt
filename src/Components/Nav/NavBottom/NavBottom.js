import './NavBottom.css';

import { NavLink } from 'react-router-dom';
import MenuButton from '../../MenuButton/MenuButton';


const NavBotton = (props)=>{
    return(
        <div className='nav-bottom'>
        <MenuButton className={props.menuOpen && 'active'} clicked={props.toggle}/>
        <ul className='nav-bottom-links'>
        <li><NavLink exact to='/' className='nav-bottom-links__link'> Home</NavLink></li>
        <li><NavLink to='/about' className='nav-bottom-links__link'> About</NavLink></li>
        <li><NavLink to='/about' className='nav-bottom-links__link'> Contact</NavLink></li>
        <li><NavLink to='/gallery' className='nav-bottom-links__link'> Work</NavLink></li>
        </ul>
    </div>
    )
}


export default NavBotton;