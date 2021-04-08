import {AnimatePresence, motion, usePresence} from'framer-motion';
import {sideDrawerVariants, linksVariants } from '../../../framerAnimation/sideDrwaer';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {

  return (
    
    <motion.ul  className="sideDrawer" exit='exit' variants={sideDrawerVariants} initial='hiddin' animate='visible'  >
        <motion.li variants={linksVariants} className="sideDrawer-list-item">
            <NavLink to="/" exact className="sideDrawer-list-link" onClick={props.closeMenu}  > Home</NavLink>
        </motion.li>
        
        <motion.li variants={linksVariants} className="sideDrawer-list-item">
            <NavLink to="/about" className="sideDrawer-list-link" onClick={props.closeMenu} >About </NavLink>
        </motion.li>

        <motion.li variants={linksVariants} className="sideDrawer-list-item">
            <NavLink to="/contact" className="sideDrawer-list-link" onClick={props.closeMenu} >Contact </NavLink>
        </motion.li>

        <motion.li variants={linksVariants} className="sideDrawer-list-item">
            <NavLink to="/work" className="sideDrawer-list-link" onClick={props.closeMenu} > Work</NavLink>
        </motion.li>

    </motion.ul>
  
  );
};

export default SideDrawer;
