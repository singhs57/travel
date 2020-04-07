import React from 'react';
// import Button from '@material-ui/core/Button';
import './Sidemenuitems.css';
import { Link } from "react-router-dom";

class Sidemenuitems extends React.Component {
    
render(){
    return(
        <div className='sidelook'>
           <h2> UPGRADE YOUR WEEKENDS </h2>
            <br />
            <Link to = "/Login"> <button className='buttn1' title='Register Here'> Register Here</button></Link>
        </div> 
    );
}
}
export default Sidemenuitems;
