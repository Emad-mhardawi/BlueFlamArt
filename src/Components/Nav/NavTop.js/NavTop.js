import React,{useState} from 'react';
import {FaPhoneAlt, FaUser} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import './NavTop.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux-store/actions/userActions';



const NavTop = (props)=>{
	const userLogin = useSelector((state)=>state.userLogin);
	const userInfo = userLogin;
	const dispatch = useDispatch()

	const logoutHandler = ()=>{
    dispatch(logout())
}

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
                    {userInfo.userInfo? 
										<div>
											{userInfo.userInfo.isAdmin ?<Link to='/admin/dashboard'>Dashboard</Link>: 
											<Link to='/profile'>Profile</Link> } 
											<button onClick={logoutHandler}>logout</button>
										</div> 
                    :
                    <div>
                    <NavLink exact to='/login' className='nav-dropdown-link'> Login</NavLink>
                    <NavLink to='/register' className='nav-dropdown-link'> Signup</NavLink>
                    </div>
                    }
								</ul>
               ) }
          </div>
						 <Link to='/order' className='nav-top__right-order'>order now</Link>
				</div>
    </div>
        
    )
}


export default NavTop;