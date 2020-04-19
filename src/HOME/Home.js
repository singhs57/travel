import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';
import Carddetails from './Carddetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons'
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Sidemenu from './Sidemenu';
import Sidemenuitems from './Sidemenuitems';
import Scrollup from './Scrollup';


function Home() {


    return (
        <div>
        {/* <Sidemenu/>  */}
        {/* <h1>“Live with no excuses and travel with no regrets”</h1> */}
        <Slideshow/> 
        <br />
        <div>
            <h1>Most Popular Packages</h1>
            <p>Wondering where to go for your next holidays?</p> 
            <p> Has sitting at home rummaging through the internet for the best holiday destinations...</p>
        <Sidemenuitems/>
        </div>        
         
        <div>
            <h1>Popular Destination</h1>
            <p>TRAVELS4U brings you the best opportunity to enjoy holiday at 
                different destinations across the world.</p>
        <Carddetails/>
        </div>

        <br /><br />

        <Scrollup/>
        <br />
        <h3>Looks like you've reached the end (:=)</h3>        
        
        </div>
    )
}
export default Home;