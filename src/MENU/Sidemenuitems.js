import React from 'react';
// import Button from '@material-ui/core/Button';
import './Sidemenuitems.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRulerHorizontal} from '@fortawesome/free-solid-svg-icons'

class Sidemenuitems extends React.Component {
    
render(){
    return(
        <div className='sidelook'>
           <h2> UPGRADE YOUR WEEKENDS </h2>
           <p>Enjoy secret offers up to 70% off the best luxury hotels every Sunday.</p>
            <br /><br/><br/><br/><br/>
            <Link to = "/Login"> <button className='buttn1' title='Register Here'> Register Here</button></Link>
            <br/><br/>
            <p>Discover the experience</p>
        </div> 
    );
}
}
export default Sidemenuitems;
