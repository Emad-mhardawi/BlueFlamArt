import React, {useState} from 'react';
import {AnimatePresence} from'framer-motion';
import Nav from '../../Components/Nav/Nav';
import SideDrawer from '../../Components/Nav/SideDrawer/SideDrawer';
import './Layout.css';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Footer from '../../Components/Footer/Footer';


const Layout = (props)=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const sideBarToggle = () => {
        setMenuOpen(!menuOpen);
      };
    

    return(
        <React.Fragment>
            <Nav menuOpen={menuOpen} toggle={sideBarToggle} />
            <AnimatePresence>
            {menuOpen && <SideDrawer closeMenu={sideBarToggle} />  }
            </AnimatePresence>
            {menuOpen && <Backdrop closeMenu={sideBarToggle} />  }
            {props.children}
            <Footer/>
        </React.Fragment>
        
    )
}


export default Layout;