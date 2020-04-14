import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';
import Carddetails from './Carddetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faPhoneSquareAlt, faVideo, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Sidemenu from './Sidemenu';
import Sidemenuitems from './Sidemenuitems';
import Scrollup from './Scrollup';


function Menu() {
    
    return (
        <div>
            <nav className='logo'>
                Hello World
                <ul>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                </ul>
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