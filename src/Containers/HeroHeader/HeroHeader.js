import "./HeroHeader.css";
import { headerDesVariants, heroButtonVariants} from '../../framerAnimation/heroHeaderAnimation';
import {blueFlameText} from '../../assets/svgs/headerSvgs';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";


//// framer motion library variants
const variants = {
hidden:{ opacity:0},
visible:{
    opacity:1,
    transition:{
        duration:2,
        when: 'beforeChildren',
    }}
}



const HeroHeader = () => {
    return (
    <div className="heroHeader">
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className='heroHeader-content'>
               {blueFlameText}
               <motion.p variants={headerDesVariants} initial='hidden' animate='visible'className='heroHeader-description'>
                    we will draw you with passion we will
                    draw you with passionwe will draw you with passion
               </motion.p>
               <motion.div variants={heroButtonVariants}>
                    <Link  to ='/about' className='heroHeader-link'>Try</Link>
              </motion.div>
        </motion.div>
    </div>
  );
};

export default HeroHeader;
