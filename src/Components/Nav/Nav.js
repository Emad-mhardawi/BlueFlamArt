import './Nav.css';
import NavTop from './NavTop.js/NavTop';
import NavBotton from './NavBotton/NavBotton';

const Nav = (props)=>{
    return(
        <nav className='nav'>
            <NavTop/>
            <NavBotton menuOpen={props.menuOpen} toggle={props.toggle}/>
        </nav>
    )
}


export default Nav;