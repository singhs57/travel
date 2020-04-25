import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';
import Carddetails from './Carddetails';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons'
import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Sidemenu from './Sidemenu';
import Popularpackages from './Popularpackages';
import Card from './CARD/Card';
import Ourservices from '../Ourservices';


function Home() {


    return (
        <div>
        {/* <Sidemenu/>  */}
        {/* <h1>“Live with no excuses and travel with no regrets”</h1> */}
        <Slideshow/> 
        <div>
        <Popularpackages/>
        </div>  
        
        <div>
            <Ourservices/>
        </div>

        <div>
        <Carddetails/>
        </div>
        
        <div>
        {/* <Card/> */}
        </div> 
          
        <div>
        <h3>Looks like you've reached the end (:=)</h3>    
        </div>        
        </div>
    )
}
export default Home;