import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';
import Carddetails from './Carddetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faPhoneSquareAlt, faVideo, faSearch} from '@fortawesome/free-solid-svg-icons'
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Sidemenu from './Sidemenu';
import Sidemenuitems from './Sidemenuitems';
import Scrollup from './Scrollup';


function Menu() {
    
    return (
        
        <div className='Menu'>  
        
        <ul>      
        <Sidemenu/>  
        <FontAwesomeIcon icon={faSearch} InputBase placeholder='search…' className='buttn'  />
        <Link to = "/Home"><button className='buttn' title='Home'> <FontAwesomeIcon icon={faHome}/> </button> </Link>
        <Link to = "/About"> <button className='buttn' title='Videos'> <FontAwesomeIcon icon={faVideo}/></button> </Link>    
        <Link to = "/Contact"> <button className='buttn' title='Contact Us'> <FontAwesomeIcon icon={faPhoneSquareAlt}/></button></Link> 
        </ul>
        <h1>“Live with no excuses and travel with no regrets”</h1>
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