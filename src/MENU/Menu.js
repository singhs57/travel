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

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUsers, faKeyboard } from '@fortawesome/free-solid-svg-icons'bout';
// import Home from './Home';
// import About from './About;
// import Contact from './Contact';
import Sidemenuitems from './Sidemenuitems';


function Menu() {
    
    return (
        
        <div className='Menu'>  
        
        <ul>      
        {/* <Link to = "/Sidemenu"><Button><FontAwesomeIcon icon={faBars} title='Click to Expand'/></Button></Link>  */}
        <Sidemenu/>  
        <InputBase placeholder='search…' className='buttn'  FontAwesomeIcon icon={faSearch}/>
        <Link to = "/Home"><button className='buttn' title='Home'> <FontAwesomeIcon icon={faHome}/> </button> </Link>
        <Link to = "/About"> <button className='buttn' title='Videos'> <FontAwesomeIcon icon={faVideo}/></button> </Link>    
        <Link to = "/Contact"> <button className='buttn' title='Contact Us'> <FontAwesomeIcon icon={faPhoneSquareAlt}/></button></Link> 
        
        {/* <Link to = "/Logout"> <button className='buttn' title='Click to Logout'> <FontAwesomeIcon icon={faUserCircle}/></button></Link>   */}
        </ul>
        <h1>“Live with no excuses and travel with no regrets”</h1>
        <Sidemenuitems/>
            <Slideshow/>  
            <br /><br /><br /><br /><br /><br />
        <Carddetails/>
        <h3>Looks like you've reached the end (:=)</h3>
        </div>
    )
}
export default Menu;