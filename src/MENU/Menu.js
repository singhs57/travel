import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';
import Carddetails from './Carddetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons'
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Sidemenu from './Sidemenu';
import Sidemenuitems from './Sidemenuitems';
import Scrollup from './Scrollup';


function Menu() {
    
    return (
        <div >
            <nav className='logo'>
            <span><FontAwesomeIcon icon={faPhoneAlt}/>  +91-7979070712 & +91-8092290510</span>
            <span><FontAwesomeIcon icon={faEnvelope}/>  57shubhamkrsingh@gmail.com</span>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
                <FontAwesomeIcon icon={faFacebook} title='Facebook'/>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faGooglePlus} title='Google Plus'/>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faTwitterSquare} title='Twitter'/>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faLinkedinIn} title='LinkedIn'/>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faYoutube} title='Youtube'/>
                </span>         
            </nav>
        <nav className='Menu'>    
        <Sidemenu/>     
        <ul>               
        {/* <FontAwesomeIcon icon={faSearch} InputBase placeholder='search…' className='buttn'  /> */}
        <li><Link to = "/Home"><button className='buttn' title='Home'> Home </button> </Link></li>
        <li> <Link to = "/About"> <button className='buttn' title='Videos'> About</button> </Link>  </li>  
        <li><Link to = "/Contact"> <button className='buttn' title='Contact Us'> Templates</button></Link> </li>
        <li><Link to = "/Contact"> <button className='buttn' title='Contact Us'> Blog</button></Link> </li>
        <li><Link to = "/Contact"> <button className='buttn' title='Contact Us'> Gallery</button></Link> </li>
        <li><Link to = "/Contact"> <button className='buttn' title='Contact Us'> Contact Us</button></Link> </li>
        </ul>
        
            
        </nav>
        <h1 className='h1'>“Live with no excuses and travel with no regrets”</h1>
        <Sidemenuitems/>
            <Slideshow/>  
            <br /><br /><br />
        <Carddetails/>
        <br /><br />
        <Scrollup/>
        <br />
        <h3>Looks like you've reached the end (:=)</h3>        
        
        </div>
    )
}
export default Menu;