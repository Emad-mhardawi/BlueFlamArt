import React, {useState} from 'react';
import {AnimatePresence} from'framer-motion';
import Nav from '../Nav/Nav';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';
import './Layout.css';


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
            {props.children}
          
        </React.Fragment>
        
    )
}


export default Layout;