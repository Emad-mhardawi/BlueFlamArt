import './Footer.css';
import { FaFacebook, FaInstagramSquare, FaSnapchat ,FaYoutube } from "react-icons/fa";


const Footer = ()=>{
    return(
        <footer className='footer'>
           <h2 className='logo'>Blue Flame</h2>
           <div className='social-media'>
               <FaFacebook/>
               <FaInstagramSquare/>
               <FaSnapchat/>
               <FaYoutube/>
               
           </div>
        </footer>
    )
}


export default Footer;